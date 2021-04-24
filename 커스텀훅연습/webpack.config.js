const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  
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
      {
        test: /\.jfif$/,
        loader:'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  },

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