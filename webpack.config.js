const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const webpack = {
  entry: './src/index.tsx',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: process.env.port,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ["transform-class-properties", "transform-object-rest-spread"]
          }
        }
      },
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
  node: { fs: 'empty' },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new CopyPlugin([
      { from: './public/feed/sample.json', to: 'feed/sample.json' },
      { from: './public/assets', to: 'assets' },
    ]),
  ],
  performance: {
    hints: false
  }
};

module.exports = webpack;