var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template:   __dirname + '/app/index.html',
    fileName:   'index.html',
    inject:     'body'
});

module.exports = {
    entry: __dirname + '/app/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-class-properties']
                }
            }/*,
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader', 'eslint-loader']
            }*/
        ]
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    plugins: [HTMLWebpackPluginConfig]
};