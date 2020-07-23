'use strict';

var gulp = require('gulp');
var config = require('./../.automation-credentials.json');
var s3 = require('gulp-s3-upload')({
  accessKeyId: config.s3.accessKeyId,
  secretAccessKey: config.s3.secretAccessKey,
});

gulp.task('upload-build-to-s3', function () {
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

