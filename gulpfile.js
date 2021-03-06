var gulp = require('gulp');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var jsfiles = ['lib/**/*.js'];

gulp.task('lint', function() {
  return gulp.src(jsfiles)
    .pipe(jshint())
    .pipe(jscs())
    .pipe(jshint.reporter(stylish))
    .pipe(jscs.reporter());
});

gulp.task('default', ['lint']);
