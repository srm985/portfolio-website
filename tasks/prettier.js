const gulp = require('gulp');
const prettier = require('gulp-prettier');

const {
    tasks: {
        prettier: prettierTask
    }
} = require('../config.js')();

gulp.task(prettierTask, () => {
    return gulp.src(
        [
            '**/*.js',
            '!.cache/**/*',
            '!dist/**/*',
            '!node_modules/**/*',
            '!public/**/*',
        ]
    )
        .pipe(prettier())
        .pipe(gulp.dest('./'));
});
