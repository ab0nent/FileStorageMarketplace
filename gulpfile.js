'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const mincss = require("gulp-minify-css");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

//in command line "set NODE_ENV=prod" or "set NODE_ENV=dev"
const  isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'dev';

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'prod'
        }
    });
    browserSync.watch('prod/**/*.*').on('change', browserSync.reload);
});

gulp.task('scss', function () {
    return gulp.src('dev/scss/**/*.scss')
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest('dev/css'))
});

gulp.task('html', function () {
    return gulp.src('dev/*.*', {since: gulp.lastRun('html')})
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('prod'))
});

gulp.task('_js', function () {
    return gulp.src('dev/js/**/_*.js')
        .pipe(concat('main.min.js'))
        .pipe(gulpIf(!isDevelopment,uglify()))
        .pipe(gulp.dest('prod/js'))
});

gulp.task('js', function () {
    return gulp.src('dev/js/**/*.min.js')
        .pipe(gulp.dest('prod/js'))
});

gulp.task('img', function () {
    return gulp.src('dev/img/**/*.*', {since: gulp.lastRun('img')})
        .pipe(gulpIf(!isDevelopment,imagemin()))
        .pipe(gulp.dest('prod/img'))
});

gulp.task('css', function () {
    return gulp.src('dev/css/**/*.*', {since: gulp.lastRun('css')})
        .pipe(concat('styles.min.css'))
        .pipe(gulpIf(!isDevelopment,mincss()))
        .pipe(gulp.dest('prod/css'))
});

gulp.task('clean', function () {
    return del('prod');
});

gulp.task('app', function () {
    return gulp.src('dev/app/**/*.*', {since: gulp.lastRun('app')})
        .pipe(gulp.dest('prod/app'))
});

gulp.task('watch', function () {
    gulp.watch('dev/scss/**/*.scss', gulp.series('scss'));
    gulp.watch('dev/*.html', gulp.series('html'));
    gulp.watch('dev/img/**/*.*', gulp.series('img'));
    gulp.watch('dev/js/**/*.*', gulp.series('js'));
    gulp.watch('dev/js/**/*.*', gulp.series('_js'));
    gulp.watch('dev/css/**/*.*', gulp.series('css'));
    gulp.watch('dev/app/**/*.*', gulp.series('app'));
});

gulp.task('build', gulp.series(
        'clean',
        gulp.parallel('_js','scss', 'html', 'img', 'app'),
        gulp.parallel('css', 'js'),
        gulp.parallel('browserSync', 'watch')
    )
);

gulp.task('default', gulp.series('build'));