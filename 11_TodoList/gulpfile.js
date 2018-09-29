  const
  gulp                = require('gulp'),
  nunjucksRender      = require('gulp-nunjucks-render'),
  sass                = require('gulp-sass'),
  watch               = require('gulp-watch'),
  cssmin              = require('gulp-cssmin'),
  autoprefixer        = require('gulp-autoprefixer');
  rename              = require('gulp-rename');

const htmlMain = gulp.task('html', () =>
  gulp.src("./src/core/index.html")
    .pipe(nunjucksRender())
    .pipe(gulp.dest("./dist"))
);
gulp.task('sass', function () {
  return gulp.src('./src/core/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});
gulp.task('cssmin', function () {
    gulp.src('dist/main.css')
        .pipe(cssmin())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});
gulp.task('default', function () {
    gulp.watch('./src/**/*.scss', ['sass', 'cssmin']);
    gulp.watch('./src/**/*.html', ['html']);
});
