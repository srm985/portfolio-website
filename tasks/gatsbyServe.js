const gulp = require('gulp');
const run = require('gulp-run');

const {
    tasks: {
        gatsbyServe
    }
} = require('../config.js')();

gulp.task(gatsbyServe, () => run('gatsby serve').exec());
