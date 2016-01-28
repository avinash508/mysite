var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

// Connect task
gulp.task('serve', function() {
  connect.server({
    root: './app',
    livereload: true
  });
});

// Sass task
gulp.task('sass', function() {
  return gulp.src('./assets/sass/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(gulp.dest('./app/css'))
    .pipe(connect.reload());
});

// Html task
gulp.task('html', function() {
  return gulp.src('./app/*.html')
    .pipe(connect.reload());
});

// Watch task
gulp.task('watch', function() {
  gulp.watch('./app/*.html', ['html']);
  gulp.watch('./assets/sass/*.scss', ['sass']);
});

// Default task
gulp.task('default', ['serve', 'watch']);
