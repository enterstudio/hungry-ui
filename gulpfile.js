var gulp = require('gulp');
var jade = require('gulp-jade');
var concat = require('gulp-concat');

var sources = ['src/main/js/modules.js', 'src/main/js/**/*.js'];
var jadeSrc = 'src/main/jade/**/*.jade';

var DEST = 'src/main/webapp';
var BOWER_HOME = 'src/main/webapp/static/bower_components';

var libsMin = [
    BOWER_HOME + '/jquery/dist/jquery.min.js',
    BOWER_HOME + '/bootstrap/dist/js/bootstrap.min.js ',
    BOWER_HOME + '/angular-resource/angular-resource.min.js',
    BOWER_HOME + '/lodash/lodash.min.js'
];

var libs = [
    BOWER_HOME + '/angular/angular.min.js'
].concat(libsMin);


// pack js files into one single file
function doConcat(confFile) {
    gulp.src(libs.concat([confFile]).concat(sources))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(DEST + '/static/js/app/'));
}

gulp.task('concat', function () {
    doConcat("src/main/js/constants.js");
});

gulp.task('jade', function (done) {
    gulp.src(jadeSrc)
        .pipe(jade({pretty: true}))
        .on('error', function (err) {
            console.log("Jade error: ", err.message);
        })
        .pipe(gulp.dest(DEST))
        .on("end", function () {
            done();
        });
});


function doWatch(concatTask) {
    gulp.watch([sources], [concatTask]);
    gulp.watch(['src/main/jade/**/*.jade'], ['jade']);
}

gulp.task('watch', function() {
    doWatch("concat");
});

gulp.task('default', ['concat', 'jade']);
