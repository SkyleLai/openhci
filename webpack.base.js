module.exports = {
    entry: {
        main: './src/index.js',
        vendor: './src/vendor.js'
    },
    module: {
        rules: [
        {
            test: /\.html$/,
            use: {
            loader: 'html-loader',
            options: {
                attrs: ['img:src', 'link:href']
            }
            }
        },
        {
            test: /\.(svg|png|jpg|gif)$/,
            use: {
            loader: 'file-loader',
            options: {
                name: '[name].[hash].[ext]',
                outputPath: 'images'
            }
            }
        }
        ]
    }
};
