const gulp = require('gulp');
const HubRegistry = require('gulp-hub');

const {
    buildTypes: {
        development,
        production
    },
    directories: {
        srcDirectory,
        tasksDirectory
    },
    environmentalVariables: {
        buildEnvironment
    },
    tasks: {
        buildProduction,
        develop,
        gatsbyBuild,
        gatsbyDevelop,
        gatsbyServe,
        lint,
        lintCSS,
        lintJS,
        serve,
        watch
    }
} = require('./config.js')();

// Initialize our tasks drectory.
const hub = new HubRegistry([`${tasksDirectory}/*.js`]);
gulp.registry(hub);

gulp.task(lint, gulp.parallel(lintJS, lintCSS));

gulp.task(watch, () => {
    gulp.watch(`${srcDirectory}/**/*.js`, gulp.series(lintJS));

    gulp.watch(`${srcDirectory}/**/*.scss`, gulp.series(lintCSS));
});

gulp.task(develop, (callback) => {
    process.env[buildEnvironment] = development;

    return gulp.parallel(lint, gatsbyDevelop, watch)(callback);
});

gulp.task(serve, (callback) => {
    process.env[buildEnvironment] = production;

    gulp.series(gatsbyServe);

    callback();
});

gulp.task(buildProduction, (callback) => {
    process.env[buildEnvironment] = production;

    gulp.series(lint, gatsbyBuild);

    callback();
});
