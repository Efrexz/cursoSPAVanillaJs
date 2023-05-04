const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }},
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [
            'style-loader',
            'css-loader'
            ]
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        inject: true,
        template: "./public/index.html",
        filename: 'index.html',
        }),
        new CopyPlugin({
            patterns: [{ from: 'src/styles/styles.css' }],
        }),
    ]
    };

    module.exports = config;