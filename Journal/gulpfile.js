var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');

gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./js/journal-interface.js']})
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./build/js'));
});
