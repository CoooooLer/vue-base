const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/1.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.min.js'
  },
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader']},
      // {test: /\.(jpe?g|png|gif)$/i, use: {
      //     loader: 'file-loader',
      //     options: {
      //       outputPath: 'images/'
      //     }
      //   }
      // }
      {test: /\.(jpe?g|png|gif)$/i, use: {
          loader: 'url-loader',
          options: {
            outputPath: 'images/',
            limit: 1024*120  // 限制图片大小，超过限制打包成图片，没超过打包成base64
          }
        }
      }
    ]
  },
};
