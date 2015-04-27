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

// TODO: add mix

gulp.task('js', function() {
    gulp.src('assets/**/*.js')
        .pipe(rename('script.js'))
        .pipe(gulp.dest('public/js'))
        .on('error', function(err, e) {
            console.log(err.message);
        })
        .pipe(connect.reload());
});
gulp.task('html', function() {
    gulp.src('public/index.html')
        .pipe(connect.reload());
});
gulp.task('css', function() {
    gulp.src('public/css/style.css')
        .pipe(connect.reload());
});
gulp.task('watch', function() {
    gulp.watch('assets/**/*.js', ['js']);
    gulp.watch('public/index.html', ['html']);
    gulp.watch('public/css/style.css', ['css']);
});

gulp.task('default', ['connect', 'js', 'watch']);
