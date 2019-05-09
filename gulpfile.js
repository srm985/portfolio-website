const branch = require('git-branch');
const gulp = require('gulp');
const HubRegistry = require('gulp-hub');

const {
    branchNamePattern,
    buildTypes: {
        development, production
    },
    directories: {
        srcDirectory, tasksDirectory
    },
    environmentalVariables: {
        buildEnvironment
    },
    tasks: {
        buildProduction, develop, gatsbyBuild, gatsbyDevelop, gatsbyServe, lint, lintCSS, lintJS, preCommit, prePush, serve, watch, prettier
    }
} = require('./config.js')();

// Initialize our tasks drectory.
const hub = new HubRegistry([
    `${tasksDirectory}/*.js`
]);
gulp.registry(hub);

gulp.task(lint, (callback) => {
    // This allows us to run parallel tasks to completion, even with errors.
    gulp._settle = true;

    gulp.parallel(lintJS, lintCSS)(callback);
});

gulp.task(watch, () => {
    gulp.watch(`${srcDirectory}/**/*.js`, (callback) => {
        gulp.parallel(lintJS)(callback);
    });

    gulp.watch(`${srcDirectory}/**/*.scss`, (callback) => {
        gulp.parallel(lintCSS)(callback);
    });
});

gulp.task(develop, (callback) => {
    process.env[buildEnvironment] = development;

    return gulp.parallel(lint, gatsbyDevelop, watch)(callback);
});

gulp.task(serve, (callback) => {
    process.env[buildEnvironment] = production;

    gulp.series(gatsbyServe)(callback);
});

gulp.task(buildProduction, (callback) => {
    process.env[buildEnvironment] = production;

    gulp.series(prettier, lint, gatsbyBuild)(callback);
});

gulp.task(preCommit, (callback) => {
    process.env[buildEnvironment] = production;

    gulp.series(prettier, lint)(callback);
});

gulp.task(prePush, (callback) => {
    branch()
        .then((branchName) => {
            console.log({
                branchName
            });

            const isValidBranch = branchNamePattern.test(branchName);

            if (!isValidBranch) {
                throw new Error(`Branch naming should follow the pattern: ${branchNamePattern}`);
            }
        })
        .catch(() => {
            throw new Error('Something went wrong while trying to verify the branch name.');
        })
        .finally(() => {
            callback();
        });
});
