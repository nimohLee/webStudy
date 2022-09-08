const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode : "development",
  entry:"./source/index.js",
  output:{
    path:path.resolve(__dirname,"public"),
    filename:'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          // [css-loader](/loaders/css-loader)
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        

        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
      template : './source/index.html',
      filename : './index.html',
      chunks : ['index']
  }
  )],
};