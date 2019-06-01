/* jshint esversion: 6 */
const path = require('path');
const base = require('./webpack.base');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = merge(base, {
    mode: 'production',
    output: {
        filename: '[name].[contentHash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimizer: [
        new OptimizeCssAssetsPlugin(),
        new TerserPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunksSortMode: 'manual',
            chunks: ['vendor', 'main'],
            minify: {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true
            }
        })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].[contentHash].css' }),
        new CleanWebpackPlugin(),
        new ImageminPlugin({
        pngquant: {
            quality: '95-100'
        },
        plugins: [
            imageminMozjpeg({
            quality: 100,
            progressive: true
            })
        ]
        })
    ],
    module: {
        rules: [
        {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
        ]
    }
});
