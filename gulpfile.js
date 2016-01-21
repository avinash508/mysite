var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('serve', function() {
  connect.server({
    root: './app',
    livereload: true
  });
});

gulp.task('sass', function() {
  return gulp.src('./assets/sass/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(gulp.dest('./app/css'))
    .pipe(connect.reload());
});

gulp.task('html', function() {
  return gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('./app/*.html', ['html']);
  gulp.watch('./assets/sass/*.scss', ['sass']);
});


gulp.task('default', ['serve', 'watch']);
