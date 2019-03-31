const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/script/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }

                ] 
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use: [
                    'file-loader',
                    {
                        loader: "image-webpack-loader"
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ],
                        plugins: ['transform-class-properties']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin({
            title: 'Welcome to CB',
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};