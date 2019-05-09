const gulp = require('gulp');
const run = require('gulp-run');

const {
    tasks: {
        gatsbyDevelop
    }
} = require('../config.js')();

gulp.task(gatsbyDevelop, () => run('gatsby develop').exec());
