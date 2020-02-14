const { src, dest, series, parallel, watch } = require("gulp")
const concat = require('gulp-concat')
const ts = require("gulp-typescript")
const del = require("del")
const uglify = require('gulp-uglify')
const connect = require('gulp-connect')

const target = "dist"
const tsProject = ts.createProject("tsconfig.json");

function clean() {
  return del(['dist']);
}

function index() {
  return src('src/index.html')
    .pipe(dest(target))
    .pipe(connect.reload())
}

function css() {
  return src('src/style.css')
    .pipe(dest(target))
    .pipe(connect.reload())
}

function staticFiles() {
  return src('src/static/**')
    .pipe(dest(`${target}/static`))
    .pipe(connect.reload())
}

function jsBuild() {
  return tsProject.src()
    .pipe(tsProject()).js
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(dest(target))
}

function jsDev() {
  return tsProject.src()
    .pipe(tsProject()).js
    .pipe(concat('scripts.js'))
    .pipe(dest(target))
    .pipe(connect.reload())
}

function watchers(cb) {
  watch(["src/**/*.ts"], jsDev)
  watch(["src/**/*.html"], index)
  watch(["src/**/*.css"], css)
  cb()
}

function serve(cb) {
  connect.server({
    root: 'dist',
    livereload: true,
  })
  cb()
}

const build = series(clean, 
  parallel(index, css, jsBuild, staticFiles),
)

const start = series(clean, 
  parallel(index, css, jsDev, staticFiles),
  parallel(serve, watchers),
)

exports.build = build
exports.start = start