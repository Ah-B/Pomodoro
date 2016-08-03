var webpack = require('webpack');
var path = require('path');

module.exports = {
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    entry: {
        app: ['webpack/hot/dev-server', './src/js/client.js']
    },

    output: {
        path: './public/built',
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/built/'
    },

    devServer: {
        contentBase: './public',
        publicPath: 'http://localhost:8080/built/'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            }

        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))
    ]

};
