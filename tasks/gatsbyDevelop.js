const run = require('gulp-run');
const gulp = require('gulp');

const {
    tasks: {
        gatsbyDevelop
    }
} = require('../config.js')();


gulp.task(gatsbyDevelop, () => run('gatsby develop').exec());
