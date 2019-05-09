const gulp = require('gulp');
const prettier = require('gulp-prettier');

const prettierConfig = require('../.prettierrc.js');

const {
    tasks: { prettier: prettierTask }
} = require('../config.js')();

gulp.task(prettierTask, () => {
    return gulp
        .src(['**/*.js', '!.cache/**/*', '!dist/**/*', '!node_modules/**/*', '!public/**/*'])
        .pipe(prettier(prettierConfig))
        .pipe(gulp.dest('./'));
});
