const gulp = require("gulp");
const sass = require("gulp-sass");

sass.compiler = require("node-sass");

function html() {
  return gulp.src("./src/*.html").pipe(gulp.dest("./dist"));
}

function js() {
  return gulp.src("./src/*.js").pipe(gulp.dest("./dist"));
}

function css() {
  return gulp
    .src("./src/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist"));
}

exports.default = gulp.series(html, js, css);
