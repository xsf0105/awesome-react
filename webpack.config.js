const path = require('path')
const webpack = require('webpack')


/* 20170531 */
const nodeEnv = process.env.NODE_ENV || 'development';
const isPro = nodeEnv === 'production';

console.log("当前运行环境：", isPro ? 'production' : 'development')

// var plugins = [
  
// ]


// module.exports = {
//   devtool: 'source-map',
//   entry: [
//     'babel-polyfill',
//     'react-hot-loader/patch',
//     './src/index'
//   ],

//   output: {
//     path: path.join(__dirname, 'public'),
//     filename: 'bundle.js',
//     publicPath: '/public/'
//   },

//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoEmitOnErrorsPlugin()
//   ],

//   module: {
//     rules: [
//       { test: /\.js?$/,
//         loader: 'babel-loader',
//         include: path.join(__dirname, 'src')
//       },
//       { test: /\.scss?$/,
//         loader: 'style-loader!css-loader!sass-loader',
//         include: path.join(__dirname, 'src', 'styles') },
//       { test: /\.png$/,
//         loader: 'file-loader' },
//       { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
//         loader: 'file-loader'}
//     ]
//   }
// }

// const path = require('path')
// const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  module: {
    rules: [
      { test: /\.js?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src')
      },
      { test: /\.scss?$/,
        loader: 'style-loader!css-loader!sass-loader',
        include: path.join(__dirname, 'src', 'styles') },
      { test: /\.png$/,
        loader: 'file-loader' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'}
    ]
  }
}
