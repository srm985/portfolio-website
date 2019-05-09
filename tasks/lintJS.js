const eslint = require('gulp-eslint');
const gulp = require('gulp');
const gulpIf = require('gulp-if');

const {
    buildTypes: { production },
    environmentalVariables: { buildEnvironment },
    tasks: { lintJS }
} = require('../config.js')();

gulp.task(lintJS, () => {
    const shouldFailOnError = process.env[buildEnvironment] === production;

    return gulp
        .src(['**/*.js', '!node_modules/**/*', '!dist/**/*', '!.cache/**/*'])
        .pipe(eslint({ fix: true }))
        .pipe(eslint.format())
        .pipe(gulpIf(shouldFailOnError, eslint.failAfterError()))
        .pipe(gulp.dest('./'));
});
