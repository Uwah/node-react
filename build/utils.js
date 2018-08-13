var path = require('path')
var config = require('./config')
const pxtorem = require('./px2rem')

exports.getPostcssPlugin = function () {
  return [
    pxtorem({ remUnit: 75 }),
    require('autoprefixer')({ browsers: ["android 4", "iOS 8"] })
  ]
}

exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = [
    {
      test: /\.css$/,
      // use: 'style-loader?css-loader'
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
          },
        },
      ]
    },
    {
      test: /\.scss$/,
      // use: 'style-loader?css-loader'
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: require.resolve('sass-loader'),
        },
      ]
    }
  ]
  return output
}
