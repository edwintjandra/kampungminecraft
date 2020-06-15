const path = require('path');

module.exports = {
  mode:"production",
  entry: './src/script/script.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/dist'),
  },
  module: {
    rules: 
    [
        { test: /\.css$/,use: ['style-loader','css-loader',]  }
    ]
  }
};