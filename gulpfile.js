'use strict';

var es = require('event-stream');
var gulp = require('gulp');
var run = require('gulp-run');
var chug = require('gulp-chug');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var del = require('del');
var concat = require('gulp-concat');
var insert = require('gulp-insert');
var addSrc = require('gulp-add-src');
var connect = require('gulp-connect');
var flatten = require('gulp-flatten');
var cleanCSS = require('gulp-clean-css');
var request = require('request');
var async = require("async");
var _ = require('underscore');
var PluginError = require('plugin-error');
var fs = require('fs');
var execFile = require('child_process').execFile;
var exec = require('child_process').exec;

var companyId;
var permissionsToken;
var CHAccessToken;
var CHHub;
var CHMappingIds = {};

var config = require('./.config-ulta.json');
var s3 = require('gulp-s3-upload')({
        "accessKeyId": config.s3.accessKeyId,
        "secretAccessKey": config.s3.secretAccessKey
    });

var replace = function() {
    return es.map(function(file, cb) {
        var fileContent = file.contents.toString();
        fileContent = fileContent.replace(/\{CONTENT_TYPE_BASEPATH\}/g, config.s3.url + config.s3.uploadpath + "contentSchemas");
        fileContent = fileContent.replace(/\{REPOSITORIES\}/g, JSON.stringify(config.REPOSITORIES));
        fileContent = fileContent.replace(/\{SLOT_REPOSITORIES\}/g, JSON.stringify(config.SLOT_REPOSITORIES));
        fileContent = fileContent.replace(/\{ICON_BASEPATH\}/g, config.s3.url + config.s3.uploadpath + "icons");
        fileContent = fileContent.replace(/\{DEPLOY_BASEPATH\}/g, config.s3.url + config.s3.uploadpath);
        fileContent = fileContent.replace(/\{DELIVERY_BASE\}/g, config.DELIVERY_BASE);
        fileContent = fileContent.replace(/\{COMPANY_TAG\}/g, config.COMPANY_TAG);
        file.contents = new Buffer.from(fileContent);
        // send the updated file down the pipe
        cb(null, file);
    });
}

var replaceCompany = function() {
    return es.map(function(file, cb) {
        var fileContent = file.contents.toString();
        fileContent = fileContent.replace(/\{COMPANY_TAG\}/g, config.COMPANY_TAG);
        file.contents = new Buffer.from(fileContent);
        // send the updated file down the pipe
        cb(null, file);
    });
};

gulp.task('del', function() {
    return del('dist');
});

gulp.task('copy-icons', function() {
    return gulp
        .src([
            'src/**/*.icon.png'
        ])
        .pipe(flatten())
        .pipe(gulp.dest('dist/icons'));
});

gulp.task('copy-templates', function() {
    return gulp
        .src([
            'src/*/templates/*.html'
        ])
        .pipe(replace())
        .pipe(flatten())
        .pipe(gulp.dest('dist/templates'));
});

gulp.task('copy-dependant-media', function() {
    return gulp
        .src([
            'src/media-dependencies/*.*'
        ])
        .pipe(flatten())
        .pipe(gulp.dest('dist/media-dependencies'));
});

gulp.task('copy-local-content-schemas', function() {
    return gulp
        .src([
            'src/*/contentSchemas/*.json'
        ])
        .pipe(replace())
        .pipe(flatten())
        .pipe(gulp.dest('dist/contentSchemas'));
});

gulp.task('copy-local-content-types', function() {
    return gulp
        .src([
            'src/*/contentTypes/*.json'
        ])
        .pipe(replace())
        .pipe(flatten())
        .pipe(gulp.dest('dist/contentTypes'));
});

gulp.task('copy-local-imports', function() {
    return gulp
        .src([
            'src/*/import/*.json'
        ])
        .pipe(replace())
        .pipe(flatten())
        .pipe(gulp.dest('dist/import'));
});

gulp.task('copy-node-modules', function() {
    return gulp
        .src([
            'node_modules/lory.js/dist/lory.min.js'
        ])
        .pipe(gulp.dest('dist'));
});


gulp.task('addLoryLicense', function() {
    return gulp
        .src('node_modules/lory.js/LICENSE')
        .pipe(insert.prepend('/*'))
        .pipe(insert.append('*/'))
        .pipe(addSrc.append('dist/lory.min.js'))
        .pipe(concat('lory.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('build-js', function() {
    return gulp.src([
            'src/**/*.js',
            'node_modules/poi-js-lib/dist/poi-lib.min.js',
            '!**/*.stories.js'
        ])
        .pipe(concat('utils.js'))
        .pipe(replace())
        .pipe(gulp.dest('dist'));
});

gulp.task('minify-js', function() {
    return gulp.src(['dist/utils.js'])
        .pipe(replace())
        .pipe(babel({
          presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('build-css', function() {
    return gulp.src([
            'src/**/*.scss',
            '!src/cardsPreview/cardsPreview.scss',
            '!src/cardsPreview/localCardsStyles.scss'
        ])
        .pipe(
            sass({
                outputStyle: 'expanded'
            }).on('error', sass.logError)
        )
        .pipe(
            autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            })
        )
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('build-cards-css', function() {
    return gulp.src([
            'src/cardsPreview/cardsPreview.scss'
        ])
        .pipe(
            sass({
                outputStyle: 'expanded'
            }).on('error', sass.logError)
        )
        .pipe(
            autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            })
        )
        .pipe(concat('cardsStyles.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', function() {
    return gulp.src([
            'dist/styles.css',
            'dist/cardsStyles.css'
        ])
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task(
    'build',
    gulp.series(
        'del',
        'copy-node-modules',
        'copy-icons',
        'copy-templates',
        'copy-local-content-schemas',
        'copy-local-content-types',
        'copy-local-imports',
        'addLoryLicense',
        'build-js',
        'minify-js',
        'build-cards-css',
        'build-css',
        'minify-css',
        'copy-dependant-media'
    ),
    function() {}
);

gulp.task('buildAllWithoutReload', gulp.series('build'));

gulp.task('buildAll', gulp.series('buildAllWithoutReload'), function() {
    return gulp.src('*').pipe(connect.reload());
});

gulp.task('server', function(done) {
    connect.server({
        port: 9100,
        hostname: '0.0.0.0',
        livereload: true,
        debug: true
    });

    done();
});

gulp.task("s3upload", function(cb) {
    gulp.src("./dist/**")
        .pipe(s3({
            Bucket: 'presalesadisws', //  Required https://presalesadisws.s3.eu-west-1.amazonaws.com/dynamic-content/accelerators
            ACL:    'public-read',       //  Needs to be user-defined
            keyTransform: function(relative_filename) {
                var new_name = config.s3.uploadpath + relative_filename;
                // or you can use `path.join("folder", "to", "upload", relative_filename)`
                return new_name;
            }
        }, {
            // S3 Constructor Options, ie:
            maxRetries: 5
        }));
    cb();
});

gulp.task(
    'buildAllMin',
    gulp.series('build', 'server'),
    function() {
        return gulp.src('*').pipe(connect.reload());
    }
);

gulp.task('watch', function(done) {
    gulp.watch('src/**/*', gulp.series(['buildAll']));
    done();
});

gulp.task('default', gulp.series('buildAll', gulp.parallel('watch', 'server')));


/**
------------ PROVISION CONTENT HUB
**/
gulp.task('create-tts', function(cb) {
    request.post({
        url: config.auth["dm-api-url"] + '/auth',
        json: {
            "username": config.auth.username,
            "password": config.auth.password
        }
    }, function(error, response, body) {
        if (error || body.status === 'failed') {
            throw new PluginError({
                plugin: 'dam-auth',
                message: body ? body.error : error
            });
        }

        companyId = body.content.companyId;
        permissionsToken = body.content.permissionsToken;



        var templates = config["content-hub"].tts;
        var url = config.auth["dm-api-url"] + '/templates?n=100';

        function getAllTTs(callback) {
            request.get({
                url: url,
                headers: {
                    'X-Amp-Auth': permissionsToken
                },
                json: {}
            }, function(error, response, body) {
                if (error || body.status === 'failed') {
                    throw new PluginError({
                        plugin: 'create-templates',
                        message: body ? body.error : error
                    });
                }
                console.log("created the templates")
                //console.log(body);
                var data = body.content.data;

                callback(null, data);
            });
        }

        function createOrUpdate(tts, callback) {
            if (!templates.length) {
                return callback();
            }

            var templatesSave = _.after(templates.length, callback);

            templates.map(function(el) {
                var name = el.name;
                var exists = tts.find(function(el) {
                    return el.name === name;
                });

                if (exists && exists.id) {
                    el.id = exists.id;
                }

                return el;
            });

            request.put({
                url: url,
                headers: {
                    'X-Amp-Auth': permissionsToken
                },
                json: {
                    "templates": templates
                }
            }, function(error, response, body) {
                if (error || body.status === 'failed') {
                    throw new PluginError({
                        plugin: 'create-update-templates',
                        message: body ? body.error : error
                    });
                }

                var ids = body.content.data;

                ids.forEach(function(id) {
                    request.post({
                        url: config.auth["dm-api-url"] + '/templates/' + id + "/publish",
                        headers: {
                            'X-Amp-Auth': permissionsToken
                        }
                    }, function(error, response, body) {
                        if (error || body.status === 'failed') {
                            throw new PluginError({
                                plugin: 'publish-images',
                                message: body ? body.error : error
                            });
                        }

                        templatesSave();
                    })
                })
            })
        }

        var waterfall = [getAllTTs, createOrUpdate];
        async.waterfall(waterfall, cb);
    })
});

gulp.task('upload-asset-dependencies', function (cb) {
    var imagesToUpload = config["content-hub"].images;

    if (!imagesToUpload || !imagesToUpload.length) {
        return cb();
    }

    request.post({
        url: config.auth["dm-api-url"] + '/auth',
        json: {
            "username": config.auth.username,
            "password": config.auth.password
        }
    }, function(error, response, body) {
        if (error || body.status === 'failed') {
            throw new PluginError({
                plugin: 'dam-auth',
                message: body ? body.error : error
            });
        }

        companyId = body.content.companyId;
        permissionsToken = body.content.permissionsToken;

        var url = config.auth["dm-api-url"] + '/assets';
        var srcurl = config.s3.url + config.s3.uploadpath;
        var assetStore = config["content-hub"]["media-dependencies"]["asset-store-id"];
        var folder = config["content-hub"]["media-dependencies"]["folder-id"];

        var imageSave = _.after(imagesToUpload.length, cb);

        imagesToUpload.forEach(function (imgName) {
            var rawimageurl = srcurl + "media-dependencies/" + imgName;
            var asset = {
                "src": rawimageurl,
                "name": imgName.split('.')[0],
                "label": imgName,
                "srcName": imgName,
                "bucketID": assetStore

            };

            if (folder) asset.folderId = folder;

            request.put({
                    url: url,
                    headers: {
                        'X-Amp-Auth': permissionsToken
                    },
                    json: {
                        "mode": "overwrite",
                        "assets": [asset]
                    }
                }, function (error, response, body) {
                    if (error || body.status === 'failed') {
                        throw new PluginError({
                            plugin: 'copy-images',
                            message: body ? body.error : error
                        });
                    }

                    request.post({
                        url: url + "/publish",
                        headers: {
                            'X-Amp-Auth': permissionsToken,
                            "X-Amp-Mode": "UI"
                        },
                        json: {
                            "assets": [body.content[0].id]
                        }
                    }, function (error, response, body) {
                        if (error || body.status === 'failed') {
                            throw new PluginError({
                                plugin: 'publish-images',
                                message: body ? body.error : error
                            });
                        }

                        imageSave();
                    })
                }
            )
        });
    });
});


gulp.task(
    'provision-content-hub',
    gulp.series(
        'upload-asset-dependencies',
        'create-tts',
    ),
    function() {}
);


/**
------------ PROVISION DYNAMIC CONTENT
**/

gulp.task('installcli', function(cb) {
    var installChild = exec('npm install -g @amplience/dc-cli', (error, stdout, stderr) => {
        if (error) {
            throw error;
        }
        console.log(stdout);
        cb();
    });
});

gulp.task('configurecli', function(cb) {
    console.log(config.auth['client-id'])
    var configurechild = exec('dc-cli configure --clientId=' + config.auth['client-id'] + ' --clientSecret=' + config.auth['client-secret'] + ' --hubId=' + config.auth['dc-hub-id'], (error, stdout, stderr) => {
        if (error) {
            throw error;
        }
        console.log(stdout);
        cb();
    });
});
gulp.task('importclischemas', function(cb) {
    console.log("Importing Schemas");
    var importschemas = exec('dc-cli content-type-schema import dist/import', (error, stdout, stderr) => {
        if (error) {
            console.log('ERROR IN SCHEMAS')
            throw error;
        }
        console.log('no error');
        //console.log(stderr);
        console.log(stdout);
        cb();
    });
});
gulp.task('importclitypes', function(cb) {
    console.log("Importing Content Types");
    var importcontentypes = exec('dc-cli content-type import dist/contentTypes', (error, stdout, stderr) => {
        if (error) {
            throw error;
        }
        console.log('no error');
        //console.log(stderr);
        console.log(stdout);
        cb();
    });
});

gulp.task('create-renders', function(cb) {
    request.post({
        url: config.auth["dm-api-url"] + '/auth',
        json: {
            "username": config.auth.username,
            "password": config.auth.password
        }
    }, function(error, response, body) {
        if (error || body.status === 'failed') {
            throw new PluginError({
                plugin: 'dam-auth',
                message: body ? body.error : error
            });
        }

        companyId = body.content.companyId;
        permissionsToken = body.content.permissionsToken;

        /** This should go and list out the templates **/
        var assetStore = config["content-hub"].templates["asset-store-id"];
        var folder = config["content-hub"].templates["folder-id"];
        var templatesLocalFolder = './dist/templates/';
        var url = config.auth["dm-api-url"] + '/assets';
        var srcurl = config.s3.url + config.s3.uploadpath;

        fs.readdir(templatesLocalFolder, function (err, files) {

            var templatesSave = _.after(files.length, cb);

            files.forEach(function(file){
                var rawrenderurl = srcurl + "templates/" + file;

                var name = file.split('.');
                var asset = {
                    "src": rawrenderurl,
                    "name": name[0],
                    "label": file,
                    "srcName": file,
                    "folderId": folder,
                    "bucketID": assetStore
                };
                request.put({
                        url: url,
                        headers: {
                            'X-Amp-Auth': permissionsToken
                        },
                        json: {
                            "mode": "overwrite",
                            "assets": [asset]
                        }
                    }, function (error, response, body) {
                        if (error || body.status === 'failed') {
                            //console.log(body);
                            throw new PluginError({
                                plugin: 'copy-templates',
                                message: body ? body.error : error
                            });
                        }

                        request.post({
                            url: url + "/publish",
                            headers: {
                                'X-Amp-Auth': permissionsToken,
                                "X-Amp-Mode": "UI"
                            },
                            json: {
                                "assets": [body.content[0].id]
                            }
                        }, function (error, response, body) {
                            if (error || body.status === 'failed') {
                                throw new PluginError({
                                    plugin: 'publish-templates',
                                    message: body ? body.error : error
                                });
                            }

                            templatesSave();
                        })
                    }
                )

            })

        });

        cb();

    })
})

gulp.task('configure-preview', function(cb) {
    console.log("Configuring the preview application");
    var payload = 'grant_type=client_credentials' +
        '&client_id=' +
        encodeURIComponent(config.auth["client-id"]) +
        '&client_secret=' +
        encodeURIComponent(config.auth["client-secret"]);

    request.post({
        url: config.auth["auth-api-url"] + 'oauth/token?' + payload,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }, function (error, response, body) {
        if (error || response.statusCode >= 400) {
            throw new PluginError({
                plugin: 'CH-auth',
                message: error
            });
        }

        CHAccessToken = JSON.parse(body).access_token;
        request.get({
            url: config.auth["dc-api-url"] + '/hubs/' + config.auth['dc-hub-id'],
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + CHAccessToken.toString()
            }
        }, function (error, response, body) {
            var parsedBody = JSON.parse(body);
            
            if (error || parsedBody.error) {
                throw new PluginError({
                    plugin: 'CH-get-settings',
                    message: parsedBody.error || error
                });
            }

            var applications = parsedBody.settings.applications;

            // if no preview, set it
            if(!applications) applications = config.applications;

            var mergedapps = _.uniq(_.union(applications, config.applications),false, _.property('templatedUri'));
            //console.log(mergedapps);

            request.patch({
                url: config.auth["dc-api-url"] + '/hubs/' + config.auth['dc-hub-id'] + '/settings',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + CHAccessToken.toString()
                },
                json: {"applications": mergedapps}
            }, function (error, response, body) {
                if (error) {
                    throw new PluginError({
                        plugin: 'DC-set-settings',
                        message: error
                    });
                }
                //console.log(error, response, body);
                console.log("i have patched the settings");
            });
        })

        cb();
    })
});

gulp.task('configure-devices', function(cb) {
    console.log("Configuring the Devices for visualisation");
    var payload = 'grant_type=client_credentials' +
        '&client_id=' +
        encodeURIComponent(config.auth["client-id"]) +
        '&client_secret=' +
        encodeURIComponent(config.auth["client-secret"]);

    request.post({
        url: config.auth["auth-api-url"] + 'oauth/token?' + payload,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }, function (error, response, body) {
        if (error || response.statusCode >= 400) {
            throw new PluginError({
                plugin: 'CH-auth',
                message: error
            });
        }

        CHAccessToken = JSON.parse(body).access_token;
        request.get({
            url: config.auth["dc-api-url"] + '/hubs/' + config.auth['dc-hub-id'],
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + CHAccessToken.toString()
            }
        }, function (error, response, body) {
            var parsedBody = JSON.parse(body);
            
            if (error || parsedBody.error) {
                throw new PluginError({
                    plugin: 'CH-get-settings',
                    message: parsedBody.error || error
                });
            }

            var devices = parsedBody.settings.devices;

            // if no preview, set it
            if(!devices) devices = config.devices;

            var mergeddevices = _.sortBy(_.uniq(_.union(devices, config.devices),false, _.property('name')), 'width');
            //console.log(mergeddevices);

            
            request.patch({
                url: config.auth["dc-api-url"] + '/hubs/' + config.auth['dc-hub-id'] + '/settings',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + CHAccessToken.toString()
                },
                json: {"devices": mergeddevices}
            }, function (error, response, body) {
                if (error) {
                    throw new PluginError({
                        plugin: 'DC-set-devices',
                        message: error
                    });
                }
                console.log("i have patched the devices");
            }); 
        })

        cb();
    })
});


gulp.task(
    'provision-dynamic-content',
    gulp.series(
        'installcli',
        'configurecli',
        'importclischemas',
        'importclitypes',
        'create-renders',
        'configure-preview',
        'configure-devices'
    ),
    function() {}
);

gulp.task(
    'provision-all',
    gulp.series(
        'provision-content-hub',
        'provision-dynamic-content'
    ),
    function() {}
);