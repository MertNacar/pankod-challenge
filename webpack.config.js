const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const webpack = {
    entry: './src/index.tsx',
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/' 
    },
    module: {
        rules: [
            {
                test: /.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /.js$/,
                loader: 'source-map-loader',
                enforce: 'pre',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'url-loader',
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new CopyPlugin([
            { from: './src/assets/images', to: 'assets/images' },
            { from: './public/assets', to: 'assets' },
        ]),
    ],
};

module.exports = webpack;