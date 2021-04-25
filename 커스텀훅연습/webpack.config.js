const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:  './src/index',
  
  module:  {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude:'/node_modules/',
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'}
        ]
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ],

  resolve:{
    extensions: ['.js', '.jsx']
  },

  devtool: 'eval-cheap-source-map',

  devServer: {
    hot: true,
    overlay: true,
    writeToDisk: true
  },

  output:{
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
}