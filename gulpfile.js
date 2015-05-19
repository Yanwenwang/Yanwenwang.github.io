'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
 
var paths = {
  scss: './src/**/*.scss'
};

gulp.task('sass', function () {
  gulp.src(paths.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./src/'));
});
 
// Rerun the task when a file changes 
gulp.task('watch', function() {
  gulp.watch(paths.scss, ['sass']);
});
 
// The default task (called when you run `gulp` from cli) 
gulp.task('default', ['watch']);