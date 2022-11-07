const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options:{
                    outputPath:'assets/images'
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].[hash].css',
        }),
        new CleanWebpackPlugin(),
        new Dotenv(),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        compress: true,
        port: 3005,
        devMiddleware: {
            index: 'index.html',
        },
        liveReload: true,
        historyApiFallback: true
    },
};
