const gulp = require('gulp');
const HubRegistry = require('gulp-hub');

const {
    buildTypes: {
        development,
        production
    },
    directories: {
        tasksDirectory
    },
    environmentalVariables: {
        buildEnvironment
    },
    tasks: {
        develop,
        gatsbyDevelop,
        lint,
        lintCSS,
        lintJS,
        watch
    }
} = require('./config.js')();

// Initialize our tasks drectory.
const hub = new HubRegistry([`${tasksDirectory}/*.js`]);
gulp.registry(hub);

gulp.task(lint, () => {
    gulp.parallel(lintJS, lintCSS);
});

gulp.task(watch, () => {
    gulp.watch(`src/**/*.js`, lint);
});

gulp.task(develop, (callback) => {
    process.env[buildEnvironment] = development;

    gulp.parallel(lint, gatsbyDevelop, watch);

    callback();
});
