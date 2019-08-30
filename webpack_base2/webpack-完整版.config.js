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
      },
      {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
      {test: /\.jsx?/i,
        exclude: /node_modules/, // 不编译这个目录下的文件
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  devtool: 'source-map' // 追踪，可以定位到未编译前报错的地方
};
