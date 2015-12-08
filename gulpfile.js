var gulp = require('gulp');
var jade = require('gulp-jade');
var concat = require('gulp-concat');

var sources = ['src/main/js/modules.js', 'src/main/js/**/*.js'];
var jadeSrc = 'src/main/jade/**/*.jade';

var DEST = 'src/main/webapp';
var BOWER_HOME = 'src/main/webapp/static/bower_components';

var libsMin = [
    BOWER_HOME + '/angular-translate/angular-translate.min.js',
    BOWER_HOME + '/angular-resource/angular-resource.min.js',
    BOWER_HOME + '/angular-animate/angular-animate.min.js',
    BOWER_HOME + '/angular-route/angular-route.min.js',
    BOWER_HOME + '/angular-messages/angular-messages.min.js',
    BOWER_HOME + '/angular-local-storage/dist/angular-local-storage.min.js',
    BOWER_HOME + '/angular-cookies/angular-cookies.min.js',
    BOWER_HOME + '/angular-growl-2/build/angular-growl.min.js',
    BOWER_HOME + '/angular-ui-bootstrap-bower/ui-bootstrap-tpls.js',
    BOWER_HOME + '/angular-sanitize/angular-sanitize.min.js'
];

var libsDev = [
    BOWER_HOME + '/angular/angular.js'
].concat(libsMin);

var libs = [
    BOWER_HOME + '/angular/angular.min.js'
].concat(libsMin);


// pack js files into one single file
function doConcat(confFile) {
    gulp.src([confFile].concat(sources))
        .pipe(concat('src/main/webapp/static/bower_components'))
        .on('error', function(err) {
            console.error('concat error', err);
        })
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

gulp.task('default', ['concat', 'jade']);
