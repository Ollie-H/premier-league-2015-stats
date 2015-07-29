var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var htmlify = require('gulp-angular-htmlify');
var ngHtml2Js = require('gulp-ng-html2js');

//simple usage
gulp.task('htmlify', function() {

  gulp.src("./src/js/partials/**/*.html")
      .pipe(ngHtml2Js({
          moduleName: function (file) {
              var pathParts = file.path.split('/');
              var folder = pathParts[pathParts.length - 2];
              return folder.replace(/-[a-z]/g, function (match) {
                  return match.substr(1).toUpperCase();
              });
          }
      }))
      .pipe(concat("partials.min.js"))
      .pipe(gulp.dest('./dist'));


});

gulp.task('styles', function () {
    return sass('./src/scss/style.scss')
      .pipe(autoprefixer({
           browsers: ['last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
           cascade:  true
       })) 
      .pipe(concat('style.css'))
      .pipe(minifyCSS({advanced: false}))
      .pipe(gulp.dest('./dist'))
      .pipe(browserSync.stream());
});

gulp.task('compress', function() {
  return gulp.src('./dist/script.js')
    .pipe(uglify())
    .pipe(rename('script.min.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('scripts', function() {
    return browserify('./src/js/app.js')  
      .bundle()
      .pipe(source('script.js'))
      .pipe(gulp.dest('./dist'))
      .pipe(browserSync.stream());
});

gulp.task('serve-and-watch', function (){
    // browserSync.init({
    //     proxy: "local.angular.com"
    // });
    gulp.watch(['./src/js/**/*.js'], ['scripts']);
    gulp.watch(['./src/sass/style.scss'], ['styles']);
    gulp.watch(['./index.html'], ['scripts']);
    
});


gulp.task('default', ['scripts', 'serve-and-watch']);

