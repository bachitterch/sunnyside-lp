const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const terser = require('gulp-terser')
const browsersync = require('browser-sync').create()

const files = {
  scssFiles: 'src/scss/**/*.scss',
  jsFiles: 'src/js/**/*.js'
}

// Sass
function SCSSToCSS() {
  return src(files.scssFiles, { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('build/css', { sourcemaps: '.' }))
}

// Terser
function JavaScript() {
  return src(files.jsFiles, { sourcemaps: true }, { allowEmpty: true })
    .pipe(terser())
    .pipe(dest('build/js'), { sourcemaps: '.' })
}

// BrowserSync Server
function Server(cb) {
  browsersync.init({
    server: {
      baseDir: '.'
    }
  })
  cb()
}

function Reload(cb) {
  browsersync.reload()
  cb()
}


// Gulp Watch
function Watch() {
  watch('*.html', Reload)
  watch(['src/scss/**/*.scss', 'src/js/**/*.js'], series(SCSSToCSS,
    JavaScript, Reload))
}

// Gulp
exports.default = series(
  SCSSToCSS,
  JavaScript,
  Server,
  Watch
)