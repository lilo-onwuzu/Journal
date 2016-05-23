var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require ('gulp-uglify');
var utilities = require('gulp-util');
var del = require('del');
var buildProduction = utilities.env.production;
var jshint = require('gulp-jshint');


gulp.task('jsBrowserify', function() {
  // list front-end files here. back-end js files are "required"/included in the front-end js
  return browserify({ entries: ['./js/journal-interface.js']})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('minifyScripts', ['jsBrowserify'], function() {
  return gulp.src('./build/js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

// running gulp build -- production in the terminal creates an "environment varibale" that sets var buildProduction to true
// running gulp build won't minifyScripts and just runs the 'justBrowserify' branch
gulp.task('build', function() {
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify')
  }
});

gulp.task('jshint', function() {
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
})

gulp.task('clean', function() {
  return del(['build']);
});
