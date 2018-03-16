var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();


gulp.task('default', function(){
  console.log('hi');
});

gulp.task('styles', function(){
  console.log('styles');
  return gulp.src('./assets/styles/style.css')
  .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
  .pipe(gulp.dest('./temp'));
  // return
  // gulp.src('./style.css').pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
  // .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('cssInject', ['styles'], function(){
  return gulp.src('./temp/style.css')
  .pipe(browserSync.stream());
});

gulp.task('watch', function(){

  browserSync.init({
    notify: false,
    server: {
      baseDir: "./"
    }
  });

  watch(['./index.html', 'modes.html'], function(){
    browserSync.reload();
  });

  watch('./assets/styles/**/*.css', function(){
    gulp.start('cssInject');
  });

});
