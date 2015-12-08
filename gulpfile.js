var gulp = require('gulp');

var sources = ['src/main/js/modules.js', 'src/main/js/**/*.js'];
var jadeSrc = 'src/main/jade/**/*.jade';

var DEST = 'src/main/webapp';


// pack js files into one single file
function doConcat(confFile) {
    var concat = require('gulp-concat');

    gulp.src([confFile].concat(sources))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(DEST + '/static/js/app/'));
}

gulp.task('concat', function() {
    doConcat("src/main/js/constants.js");
});

gulp.task('jade', function(done) {
    var jade = require('gulp-jade');
    var changed = require('gulp-changed');

    gulp.src(jadeSrc)
        .pipe(changed(DEST, {extension: '.html'}))
        .pipe(jade({pretty: true}))
        .on('error', function(err) {
            console.log("Jade error: ", err.message);
        })
        .pipe(gulp.dest(DEST))
        .on("end", function() {
            done();
        });
});

gulp.task('default', ['concat', 'jade']);
