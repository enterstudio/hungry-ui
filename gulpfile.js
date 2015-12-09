var gulp = require('gulp'),
    uglify = require('gulp-uglify');
var jade = require('gulp-jade');
var concat = require('gulp-concat');

var sources = ['src/main/js/app/**/*.js'];
var jadeSrc = 'src/main/jade/**/*.jade';

var DEST = 'src/main/webapp';
var BOWER_HOME = 'src/main/webapp/static/bower_components';

var libsMin = [
    BOWER_HOME + '/jquery/dist/jquery.min.js',
    BOWER_HOME + '/bootstrap/dist/js/bootstrap.min.js ',
    BOWER_HOME + '/angular-resource/angular-resource.min.js',
    BOWER_HOME + '/lodash/lodash.min.js',
    BOWER_HOME + '/angular-route/angular-route.min.js'
];

var libs = [
    BOWER_HOME + '/angular/angular.min.js'
].concat(libsMin);


// pack js files into one single file
function doConcat(confFile) {
    gulp.src(libs)
        .pipe(concat('libs.js'))
        .pipe(gulp.dest(DEST + '/static/js/app/'));

    gulp.src([confFile].concat(sources))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(DEST + '/static/js/app/'));
}

gulp.task('concatDev', function () {
    doConcat("src/main/js/constants/constantsDev.js");
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

gulp.task('watch', function () {
    doWatch("concatDev");
});

gulp.task('default', ['concatDev', 'jade']);


// dist
gulp.task('uglify', function () {
    gulp.src([DEST + '/static/js/app/libs.js'].
        concat(["src/main/js/constants/constants.js", DEST + '/static/js/app/main.js']))
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest(DEST + '/static/js/app/'));
});

gulp.task('concatDist', function () {
    doConcat("src/main/js/constants/constants.js");
});

gulp.task('dist', ['concatDist', 'jade']);
