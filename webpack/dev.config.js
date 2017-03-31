const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    path.resolve('./src/client/app.tsx'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/',
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../src'),
      'node_modules',
    ],
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {
      components: __dirname + '../src/client/components',
      actions: __dirname + '../src/client/actions',
      api: __dirname + '../src/client/api',
      reducers: __dirname + '../src/client/reducers',
      utils: __dirname + '../src/client/utils',
      constants: __dirname + '../src//client/constants',
    },
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader']},
      {test: /\.(ts|tsx)?$/, loader: ['react-hot-loader', 'awesome-typescript-loader']},
      { test: /\.css$/, use: ['style-loader', 'css-loader']},
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/client/index.html'),
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist/',
    historyApiFallback: true,
    hotOnly: true,
    publicPath: '/',
    host: '0.0.0.0',
    port: 3000,
  },
}
