var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');
var babel = require('gulp-babel');
var connect = require('gulp-connect');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss'); 
var sass = require('gulp-sass');   
var concat = require('gulp-concat')
var uglify = require('gulp-uglify');


gulp.task('sass', function () {
  var processors = [                                 // 定義 postCSS 所需要的元件
      autoprefixer({browsers: ['last 5 version']})   // 使用 autoprefixer，這邊定義最新的五個版本瀏覽器
  ];
  return gulp.src('./src/scss-dev/*.scss')
    .pipe(sass(
      {outputStyle: 'compressed'}  //expanded/compressed
    ).on('error', sass.logError))
    .pipe(postcss(processors))                       // 將 PostCSS 插入流程
    .pipe(gulp.dest('./src/css-dev/'))
    .pipe(connect.reload());
});

gulp.task('concat', function() {
    return gulp.src('./src/css-dev/*.css')
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./src/css/'))
        .pipe(connect.reload());
});

gulp.task('babel', function() {
  gulp.src('./src/js-dev/original/*.js')
      .pipe(babel())
      .pipe(gulp.dest('./src/js-dev/'))
});

gulp.task('uglify', function() {
    return gulp.src('./src/js-dev/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./src/js/'));
});



gulp.task('watch',function () {
    gulp.watch('./src/scss-dev/*.scss',['sass']);
});
gulp.task('watch-concat',function () {
    gulp.watch('./src/css-dev/*.css',['concat']);
});
gulp.task('server',function () {
  connect.server({
    root: ['./'],
    livereload: true,
    port: 2022,
  });
});


// gulp.task('default',['babel','uglify','watch','watch-concat','server','sass','concat']);
gulp.task('default', gulpSequence('sass', 'babel', 'uglify','concat', 'watch', 'watch-concat', 'server'));

