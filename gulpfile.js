var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');



gulp.task('scripts', function(){
  gulp.src('src/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist'));
});
