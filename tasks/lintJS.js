const eslint = require('gulp-eslint');
const gulp = require('gulp');
const gulpIf = require('gulp-if');

const {
    buildTypes: {
        production
    },
    environmentalVariables: {
        buildEnvironment
    },
    tasks: {
        lintJS
    }
} = require('../config.js')();

gulp.task(lintJS, () => {
    const isProductionBuild = process.env[buildEnvironment] === production;

    return gulp
        .src([
            '**/*.js',
            '!.cache/**/*',
            '!dist/**/*',
            '!node_modules/**/*',
            '!public/**/*'
        ])
        .pipe(
            eslint({
                fix: isProductionBuild
            })
        )
        .pipe(eslint.format())
        .pipe(gulpIf(isProductionBuild, eslint.failAfterError()))
        .pipe(gulpIf(isProductionBuild, gulp.dest('./')));
});
