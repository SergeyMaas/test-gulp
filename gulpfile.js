var gulp = require('gulp'),
    connect = require('gulp-connect'),
    rename = require('gulp-rename'),
    livereload = require('gulp-livereload');

gulp.task('connect', function() {
    connect.server({
        root: 'public',
        livereload: true
    });
});


gulp.task('js', function() {
    gulp.src('assets/**/*.js')
        .pipe(rename('script.js'))
        .pipe(gulp.dest('public/js'))
        .on('error', function(err, e) {
            console.log(err.message);
        })
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('assets/**/*.js', ['js']);
});

//hi a'm norm
gulp.task('default', ['connect', 'js', 'watch']);