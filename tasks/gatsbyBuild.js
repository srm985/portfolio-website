const gulp = require('gulp');
const run = require('gulp-run');

const {
    tasks: { gatsbyBuild }
} = require('../config.js')();

gulp.task(gatsbyBuild, () => run('gatsby build').exec());
