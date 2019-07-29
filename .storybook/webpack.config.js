const path = require('path');

module.exports = async ({
    config
}) => {
    config.module.rules.push({
        include: path.resolve(__dirname, '../'),
        test: /\.scss$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
    });

    config.module.rules.push({
        exclude: [/node_modules\/(?!(gatsby)\/)/],
        test: /\.js$/,
        use: [{
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-react',
                    '@babel/preset-env'
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties'
                ]
            }
        }]
    });

    config.resolve = {
        mainFields: ['browser', 'module', 'main'],
        alias: {
            'core-js/modules': path.resolve(
                __dirname,
                'node_modules/@storybook/core/node_modules/core-js/modules',
            ),
        }
    };

    delete config.resolve.alias['core-js'];

    // Return the altered config.
    return config;
};
