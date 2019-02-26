'use strict'

var   gulp = require('gulp'),
        less = require('gulp-less-dev'),
		browserSync = require('browser-sync'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglifyjs'),
		cssnano = require('gulp-cssnano'),
		rename = require('gulp-rename'),
		del = require('del'),
		imagemin = require('gulp-imagemin'),
		pngquant = require('imagemin-pngquant'),
		cache = require('gulp-cache'),
		autoprefixer = require('gulp-autoprefixer'),
		spritesmith = require('gulp.spritesmith');
		

gulp.task('hello', function( ){
	console.log('Hello World');
	}); 
	
	
	 gulp.task('less', function( ){
	 	return gulp.src('app/less/**/*.less')
			.pipe(less())
			.pipe(autoprefixer(['last 15 versions', '>1%', 'ie 8', 'ie 7'], {cascade: true}))
			.pipe(gulp.dest('app/css'))
			.pipe(browserSync.reload({stream:true})); 
	 });
	 
	 
gulp.task('browser-sync', function(){
		  browserSync({
			  server:{
				  baseDir: 'app'
				  },
				  notify:false
		  });
		});
	
	
	
	gulp.task('scripts', function(){
		 	return gulp.src([
				'app/libs/jquery/dist/jquery.min.js',
				'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
			])
			.pipe(concat('libs.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('app/js')); 
		});
		
	gulp.task('css-libs', ['less'], function(){
		return gulp.src('app/css/libs.css')
        .pipe(cssnano()) 
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('app/css'));
	});
	
gulp.task('watch',['browser-sync', 'css-libs', 'scripts', 'sprite'] ,function () {
		gulp.watch('app/less/**/*.less' , ['less']);
	    gulp.watch('app/*.html' , browserSync.reload);
		gulp.watch('app/js/**/*.js' , browserSync.reload);
});	

gulp.task('clean', function(){
	return del.sync('dist');
});

gulp.task('clear', function(){
	return cache.clearAll();
});

gulp.task('sprite', function(){
	var spriteData = gulp.src('app/image/sprite/*.png')
	.pipe(spritesmith({
		imgName: 'sprite.png',
		cssName: 'sprite.css'
	}));
	return spriteData.pipe(gulp.dest('app/img/sprite'));
})

gulp.task('img', function(){
	return gulp.src('app/images/**/*')
	.pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	})))
	.pipe(gulp.dest('dist/img'));
})

gulp.task('build',['clean', 'img', 'less', 'scripts'] ,function () {
	var buildCss = gulp.src(['app/css/main.css', 'app/css/libs.min.css'])
	.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));

	var buildJS = gulp.src('app/js/**/*')
	.pipe(gulp.dest('dist/js'));
	
	var buildHTML = gulp.src('app/*.html')
	.pipe(gulp.dest('dist'));
});

gulp.task('default', ['watch']);
	
	

	 
	
		
		
	



