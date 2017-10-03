'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const gulpIf = require('gulp-if');
const uglify = require('gulp-uglify');
// const wiredep = require('wiredep').stream;
const imagemin = require('gulp-imagemin');
const del = require('del');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';



function clean() {
	return del(['dist']);
}
gulp.task(clean);


function assets() {
	return gulp.src(['src/assets/**/*.*', '!src/assets/svg/*.*'])
		.pipe(gulpIf(!isDevelopment, imagemin({optimizationLevel: 5})))
		.pipe(gulp.dest('./dist'));
}


function copyCss() {
	return gulp.src('src/css/**/*.css')
		.pipe(gulp.dest('./dist/css'));
}


function buildCss() {
	return gulp.src(['src/scss/**/*.scss', '!src/scss/**/sprite.scss'])
		.pipe(gulpIf(isDevelopment, sourcemaps.init()))
		.pipe(sass(gulpIf(!isDevelopment, {outputStyle: 'compressed'})).on('error', sass.logError))
		.pipe(postcss([ autoprefixer('last 2 versions', 'ie 10') ]))
        .pipe(gulp.dest('./dist/css'))	
		.pipe(gulpIf(isDevelopment, sourcemaps.write()))
		.pipe(gulp.dest('dist/css'));	
}


// gulp.task('bower', function() {
// 	return gulp.src('./dist/*.html')
// 		.pipe(wiredep({
// 			derictory: "src/bower_components/**"
// 		}))
// 		.pipe(gulp.dest('./dist'));	
// });


function html() {
	return gulp.src('./src/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('./dist/'));	
}


function script() {
	return gulp.src('src/js/**/*.js')
		.pipe(gulpIf(!isDevelopment, uglify()))
		.pipe(gulp.dest('./dist/js/'));	
}

function watch() {
	gulp.watch('src/scss/**/*.scss', gulp.series(buildCss));
	gulp.watch('src/css/**/*.css', gulp.series(copyCss));
	gulp.watch('src/js/**/*.js', gulp.series(script));
	// gulp.watch('src/**/*.pug', gulp.series('html', 'bower'));
	gulp.watch('src/**/*.pug', gulp.series(html));
	gulp.watch('src/assets/**/*.*', gulp.series(assets));
}


gulp.task('dev', gulp.series(
	gulp.parallel(
		// gulp.series('html', 'bower'), 
		html,
		buildCss, 
		copyCss,
		script, 
		assets
	),
	watch
));


gulp.task('default', gulp.series(
	clean, 
	gulp.parallel(
		// gulp.series('html', 'bower'), 
		html,
		buildCss, 
		copyCss,
		script, 
		assets
	)
));