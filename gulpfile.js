var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    concatCss = require('gulp-concat-css');
    
gulp.task('default', ['jshint', 'copyHtml', 'copyLibs', 'build-js', 'build-css', 'watch']);

gulp.task('jshint', function() {
    return gulp.src(['source/app.js', 'source/api/*.js', 'source/states/discovery/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('copyLibs', function() {
    gulp.src('source/lib/**/*').pipe(gulp.dest('public/lib'));
});

gulp.task('build-js', function() {        
    gulp.src(['source/app.js', 'source/api/*.js', 'source/states/discovery/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/assets/javascript'));
});

gulp.task('build-css', function() {
    return gulp.src('source/css/*.css')
        .pipe(concatCss('bundle.css'))
        .pipe(gulp.dest('public/assets/styles'));
});

gulp.task('copyHtml', function() {
    gulp.src('source/states/discovery/*.html').pipe(gulp.dest('public/states/discovery'));
    gulp.src('source/index.html').pipe(gulp.dest('public'));
});

gulp.task('watch', function() {
    gulp.watch('source/**/*.js', ['jshint', 'copyHtml', 'copyLibs', 'build-js', 'build-css']);
});
