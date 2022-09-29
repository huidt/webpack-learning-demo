const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/index.js',
    testApp: './src/demo.js',
    reactApp: './src/reactTest.js',
    interview: './src/interview.js',
  },
  output: {
    filename: '[chunkhash:8]_[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 100,
    poll: 1000,
  },
  mode: 'production',
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      { test: /\.less$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'] },
      {
        test: /\.(png|jpg|svg|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_hui_[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[name]_hui_[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({ filename: `[name][contenthash:8].css` }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, './'),
    },
    port: 3010,
    compress: true,
    hot: true,
  },
}
