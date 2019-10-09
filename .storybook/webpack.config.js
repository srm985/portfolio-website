const path = require('path');

module.exports = async (options) => {
    const {
        config
    } = options;

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
        exclude: [
            /node_modules\/(?!(gatsby)\/)/
        ],
        test: /\.js$/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    plugins: [
                        '@babel/plugin-proposal-class-properties'
                    ],
                    presets: [
                        '@babel/preset-react',
                        '@babel/preset-env'
                    ]
                }
            }
        ]
    });

    config.resolve = {
        mainFields: [
            'browser',
            'module',
            'main'
        ]
    };

    // Return the altered config.
    return config;
};
