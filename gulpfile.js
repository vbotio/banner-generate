var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require('gulp-sass');

gulp.task("browser-sync", function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('sass', function() {
	return gulp.src('./css/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'))
});

gulp.task('watch', function() {
	gulp.watch('./css/*.scss', ['sass']);
});

gulp.task('default', ['browser-sync']);