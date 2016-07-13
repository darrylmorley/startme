// Startme - my small dev kit

var gulp          = require ('gulp');
    sass          = require ('gulp-sass');
    browserSync   = require ('browser-sync');
    bourbon       = require ('node-bourbon').includePaths;
    neat          = require ('node-neat').includePaths;
    autoprefixer  = require ('gulp-autoprefixer');

// Sass Compilation
gulp.task('sass', function() {
        gulp.src('./src/css/main.sass')
        .pipe(sass({
        errLogToConsole: true,
        includePaths: bourbon,
        includePaths: neat
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./src/css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.reload({
          stream: true
        }))
});

// Start Server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
});

// Watch files for changes
gulp.task('watch', function() {
    gulp.watch('src/css/*.sass', ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Tasks to start on 'gulp'
gulp.task('default', ['browser-sync', 'watch', 'sass']);
