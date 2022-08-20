"use strict";

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    // compress = require('gulp-zip'),
notify = require('gulp-notify'),
    sass = require('gulp-sass');

gulp.task('scss', function () {
  return gulp.src('project/css/*.scss').pipe(sass()).pipe(autoprefixer("last 3 versions")).pipe(concat('main.css')).pipe(gulp.dest('dist/css')).pipe(notify());
});
gulp.task('css', function () {
  return gulp.src('project/css/*.css').pipe(sass()).pipe(autoprefixer("last 3 versions")).pipe(gulp.dest('dist/css')).pipe(notify());
});
gulp.task('html', function () {
  return gulp.src('project/*.html').pipe(gulp.dest('dist')).pipe(notify());
});
gulp.task('js', function () {
  return gulp.src('project/js/*.js').pipe(concat('app.js')).pipe(gulp.dest('dist/js')).pipe(notify());
});
gulp.task('images', function () {
  return gulp.src('project/images/*.*').pipe(gulp.dest('dist/images')).pipe(notify());
});
gulp.task('icons', function () {
  return gulp.src('project/icons/*.*').pipe(gulp.dest('dist/icons')).pipe(notify());
});
gulp.task('watch', function () {
  require('./server.js');

  gulp.watch('project/css/*.scss', gulp.series('scss'));
  gulp.watch('project/css/*.css', gulp.series('css'));
  gulp.watch('project/*.html', gulp.series('html'));
  gulp.watch('project/images/*.*', gulp.series('images'));
  gulp.watch('project/icons/*.*', gulp.series('icons'));
  gulp.watch('project/js/*.js', gulp.series('js'));
});