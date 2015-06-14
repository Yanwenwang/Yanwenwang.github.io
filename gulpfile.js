'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var browserSync = require('browser-sync').create();
 
var paths = {
  js: './src/**/*.js',
  scss: './src/**/*.scss',
  html: './src/**/*.html'
};

gulp.task('sass', function () {
  gulp.src(paths.scss)
    .pipe(sass({
      indentedSyntax: 'true',
      sourceComments:'true'
    }).on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./src/'))
    .pipe(browserSync.stream());

});
 
gulp.task('lint', function() {
  return gulp.src(paths.js)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

// Static server
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(paths.scss, ['sass']);
  gulp.watch(paths.js, ['lint']);
  gulp.watch(paths.html).on('change', browserSync.reload);
});

// The default task (called when you run `gulp` from cli) 
gulp.task('default', ['serve']);
 
