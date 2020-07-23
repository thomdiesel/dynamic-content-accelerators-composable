'use strict';

var gulp = require('gulp');
var request = require('request');
var PluginError = require('plugin-error');
var fs = require('fs');
var _ = require('underscore');
var config = require('./../.automation-credentials.json');
var permissionsToken;

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


gulp.task('upload-local-render-templates-to-ch-and-publish', function (cb) {
  var assetStore = config.amplience['content-hub'].templates['asset-store-id'];
  var folder = config.amplience['content-hub'].templates['folder-id'];
  var templatesLocalFolder = './dist/templates/';
  var url = config.amplience['content-hub']['api-url'] + '/assets';

  fs.readdir(templatesLocalFolder, function (err, files) {
    var templatesSave = _.after(files.length, cb);
    files.forEach(function (file) {
      fs.readFile(templatesLocalFolder + file, "utf8", (err, data) => { 
        var name = file.split('.');
        var asset = {
          name: name[0],
          label: file,
          srcName: file,
          folderId: folder,
          bucketID: assetStore,
          type:"text",
          textContent: data
        };

        console.log(url);
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
      })
    });
  });
  cb();
});
