const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use : ['babel-loader'],
            
        }
    ]
},
mode : 'development',
devtool: 'source-map',
watch: true,
};
 