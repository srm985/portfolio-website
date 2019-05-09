const MAIN_BRANCH_NAMES = [
    'develop',
    'master'
];

const BRANCH_PREFIX_NAMES = [
    'bugfix',
    'feature',
    'hotfix',
    'release',
    'test'
];

const branchRegex = new RegExp(`^(${MAIN_BRANCH_NAMES.join('|')})|((${BRANCH_PREFIX_NAMES.join('|')})/(([a-z]+((-[a-z]+)+)?)|(\\d+\\.\\d+\\.\\d+)))$`);

module.exports = () => ({
    branchNamePattern: branchRegex,
    buildTypes: {
        development: 'DEVELOPMENT',
        production: 'PRODUCTION'
    },
    configFiles: {
        sassConfig: './.sasslintrc'
    },
    directories: {
        distDirectory: './dist',
        rootDirectory: './',
        srcDirectory: './src',
        tasksDirectory: './tasks'
    },
    environmentalVariables: {
        buildEnvironment: 'BUILD_ENVIRONMENT'
    },
    packageJSON: './package.json',
    tasks: {
        buildProduction: 'build-prod',
        bumpVersion: 'bump-version',
        cleanDist: 'clean',
        develop: 'develop',
        gatsbyBuild: 'gatsby-build',
        gatsbyDevelop: 'gatsby-develop',
        gatsbyServe: 'gatsby-serve',
        lint: 'lint',
        lintCSS: 'lint-css',
        lintJS: 'lint-js',
        preCommit: 'pre-commit',
        prePush: 'pre-push',
        serve: 'serve',
        watch: 'watch'
    },
    webpackConfig: '../webpack.config.js'
});
