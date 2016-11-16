var gulp = require('gulp');
var markdown = require('gulp-markdown');
var reveal = require('gulp-reveal');
var launcher = require('launch-browser');

gulp.task('default', function () {
  gulp.src('index.md')
    .pipe(markdown())
    .pipe(reveal())
    .pipe(gulp.dest('.'));
});
 
gulp.task('watch', function () {
  gulp.watch('*.md', ['default']);
});

gulp.task('buildnlaunch', ['default'], function() {
  launcher('http://localhost/~clayton/nodetalk/index.html#/10', function(e, browser){
    
    if(e) return console.log(e);
    
    browser.on('stop', function(code){
        console.log( 'Browser closed with exit code:', code );
    });
  });
}); 