const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

let mode = 'development';
let target = 'web';
let minify = false;
let devtool = 'source-map';


if (process.env.NODE_ENV === 'production') {
  mode = 'production'
  target = 'browserslist'
  minify = true
  devtool = false
}

module.exports = {
  target: target,
  mode: mode,
  entry: {
    index: path.resolve(__dirname, 'src/js/main.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  devServer: {
    watchFiles: ['src/**/*.html', 'src/**/*.scss', 'src/**/*.cs'],
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    static: {
      publicPath: '/',
    }
  },
  devtool: devtool,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(sass|scss|css)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      title: 'Webpack 5 Boilerplate',
      minify: minify,
      inject: 'body',
    })
  ]
}