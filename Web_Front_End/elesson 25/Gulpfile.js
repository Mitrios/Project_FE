'use strict'

var gulp = require('gulp'),
    less = require('gulp-less-dev');


gulp.task('hello', function(){
    console.log('Hello There!');
});

gulp.task('less', function(){
    return gulp.src('app/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('app/css'))
})