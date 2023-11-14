const path = require('path');
const miniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: 'production',
  entry: {
    index: './src/js/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [miniCssExtractPlugin.loader, "css-loader"],
      }
    ]
  },  
  plugins: [
    new miniCssExtractPlugin()
  ]
};