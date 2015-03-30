var gulp = require('gulp');
var imageMin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');

// Optimize Images
gulp.task('images', function () {
  return gulp.src('img/*')
        .pipe(imageMin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('img/'));
});

gulp.task('minCSS', function () {
  return gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['images', 'minCSS']);