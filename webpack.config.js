const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const mode = process.argv.indexOf('production') > -1;

module.exports = {
    devtool: 'inline-source-map',
    entry: ['./src/ts/index.ts'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: mode ? 'mismis.min.js' : 'mismis.js',
        publicPath: "/"
    },
    resolve: {
        extensions: ['.ts', '.js', '.scss'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './public/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename:  mode ? 'mismis.min.css' : 'mismis.css'
        })
    ],
    optimization: {
        minimizer: [new TerserPlugin({
            extractComments: false,
        })],
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.ts?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.svg/,
                use: {
                    loader: 'svg-url-loader',
                    options: {
                        iesafe: true,
                        encoding: 'base64'
                    }
                }
            },
        ]
    }
};