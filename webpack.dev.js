/* jshint esversion: 6 */
const path = require('path');
const base = require('./webpack.base');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(base, {
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './src/index.html',
        chunksSortMode: 'manual',
        chunks: ['vendor', 'main']
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
        }
        ]
    }
});
