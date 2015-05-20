'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
 
var paths = {
  js: './src/**/*.js',
  scss: './src/**/*.scss'
};

gulp.task('sass', function () {
  gulp.src(paths.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./src/'));
});
 
 gulp.task('lint', function() {
  return gulp.src(paths.js)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

// Rerun the task when a file changes 
gulp.task('watch', function() {
  gulp.watch(paths.scss, ['sass']);
  gulp.watch(paths.js, ['lint']);
});
 
// The default task (called when you run `gulp` from cli) 
gulp.task('default', ['watch']);
 
