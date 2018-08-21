const autoprefixer = require('gulp-autoprefixer');
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');


gulp.task('default', ['sass']);


gulp.task('sass', function() {
  gulp.src('./public/stylesheets/scss/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 3 versions']}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/stylesheets/css'))
});
