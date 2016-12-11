/*
 * Code originally by Krasimir Tsonev
 * http://krasimirtsonev.com/blog/article/Using-Nodejs-to-rename-set-of-images-pictures-to-lowercase
 * Added modifications to replace underscores with dashes.
*/

var fs   = require('fs'),
    glob = require('glob'),
    gulp = require('gulp'),
    path = require('path'),
    util = require('gulp-util');

gulp.task('rename-files', () => {

    glob(__dirname + '/' + util.env.folder + '/**/*.*', function (err, files) {
        var renamed = 0,
            names   = [];

            files.forEach(function (file) {
                var dir      = path.dirname(file),
                    filename = path.basename(file);

                fs.renameSync(
                    file,
                    dir + '/' + filename.toLowerCase().replace(/_+/g, '-'));

                names.push(filename);

                renamed++;
            });

            console.log("\r\n" + renamed + ' files renamed' + "\r\n");

    });

});
