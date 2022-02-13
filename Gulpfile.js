const {series} = require("gulp");
const browserSync = require("browser-sync").create();

// // Static Server + watching scss/html files
// gulp.task('serve', ['sass'], function() {
//     browserSync.init({
//         server: "./"
//     });

//     gulp.watch("./scss/*.scss", ['sass']);
//     gulp.watch("./*.html").on('change', browserSync.reload);
// });

// // Compile sass into CSS & auto-inject into browsers
// gulp.task('sass', function() {
//     return gulp.src("./scss/*.scss")
//         .pipe(sass())
//         .pipe(gulp.dest("dist/css"))
//         .pipe(browserSync.stream());
// });

// gulp.task('default', ['serve']);

function browserSync(cb) {
    browserSync.init({
        server: "./"
    });
}

function clean(cb) {
    // body omitted
    cb();
}

function build(cb) {
    // body omitted
    cb();
}

exports.build = build;
exports.default = series(clean, build);