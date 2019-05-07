module.exports = () => ({
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
        serve: 'serve',
        watch: 'watch'
    },
    webpackConfig: '../webpack.config.js'
});
