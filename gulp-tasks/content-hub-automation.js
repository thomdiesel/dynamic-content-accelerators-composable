'use strict';

var gulp = require('gulp');
var request = require('request');
var PluginError = require('plugin-error');
var fs = require('fs');
var _ = require('underscore');
var config = require('./../.automation-credentials.json');
var s3 = require('gulp-s3-upload')({
  accessKeyId: config.s3.accessKeyId,
  secretAccessKey: config.s3.secretAccessKey,
});
var permissionsToken;

/**
 * Uploads file to a HTTPS location for:
 *  1) Importing HBS templates directly into Content Hub
 *  2) Hosting the application for preview (and potentially other purposes)
 */
gulp.task('upload-build-to-s3', function (cb) {
  return gulp.src('./dist/**').pipe(
    s3(
      {
        Bucket: config.s3.bucket,
        ACL: 'public-read',
        keyTransform: function (relative_filename) {
          console.log(relative_filename);
          var new_name = config.s3.uploadpath + relative_filename;
          return new_name;
        },
      },
      {
        maxRetries: 5,
      }
    )
  );
});

/**
 * Re-usable authentication for content hub which stored the permissions token to be used in subsequent CH management requests
 */
gulp.task('authenticate-content-hub', function (cb) {
  request.post(
    {
      url: config.amplience['content-hub']['api-url'] + '/auth',
      json: {
        username: config.amplience['content-hub'].username,
        password: config.amplience['content-hub'].password,
      },
    },
    function (error, response, body) {
      if (error || body.status === 'failed') {
        throw new PluginError({
          plugin: 'dam-auth',
          message: body ? body.error : error,
        });
      }
      permissionsToken = body.content.permissionsToken;
      console.log(permissionsToken);
      cb();
    }
  );
});

gulp.task('upload-render-templates-to-ch-and-publish', function (cb) {
  /** This should go and list out the templates **/
  var assetStore = config.amplience['content-hub'].templates['asset-store-id'];
  var folder = config.amplience['content-hub'].templates['folder-id'];
  var templatesLocalFolder = './dist/templates/';
  var url = config.amplience['content-hub']['api-url'] + '/assets';
  var srcurl = config.s3.url + config.s3.uploadpath;

  fs.readdir(templatesLocalFolder, function (err, files) {
    var templatesSave = _.after(files.length, cb);
    files.forEach(function (file) {
      var rawrenderurl = srcurl + 'templates/' + file;
      var name = file.split('.');
      var asset = {
        src: rawrenderurl,
        name: name[0],
        label: file,
        srcName: file,
        folderId: folder,
        bucketID: assetStore,
      };

      console.log(url);
      console.log(asset);
      request.put(
        {
          url: url,
          headers: {
            'X-Amp-Auth': permissionsToken,
          },
          json: {
            mode: 'overwrite',
            assets: [asset],
          },
        },
        function (error, response, body) {
          //console.log(error);
          console.log(body);
          //console.log(response);
          if (error || body.status === 'failed') {
            throw new PluginError({
              plugin: 'copy-templates',
              message: body ? body.error : error,
            });
          }

          request.post(
            {
              url: url + '/publish',
              headers: {
                'X-Amp-Auth': permissionsToken,
                'X-Amp-Mode': 'UI',
              },
              json: {
                assets: [body.content[0].id],
              },
            },
            function (error, response, body) {
              if (error || body.status === 'failed') {
                throw new PluginError({
                  plugin: 'publish-templates',
                  message: body ? body.error : error,
                });
              }
              templatesSave();
            }
          );
        }
      );
    });
  });
  cb();
});
