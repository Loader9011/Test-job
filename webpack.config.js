const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        filename: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        assetModuleFilename: '[name][ext]',
        clean: true
    },
    performance: {
        hints: false,
        maxAssetSize: 512000,
        maxEntrypointSize: 512000
    },
    devServer: {
        port: 8080,
        compress: true,
        open: true,
        compress: true,
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, './dist')
        } 
    },
    module: {
        rules: [
            {
              test: /\.scss$/,
              use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)$/i,
                type: 'asset/resource'
            }
          ],
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'Job test',
            filename: 'index.html',
            template: path.resolve(__dirname, './src/index.html')
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
}