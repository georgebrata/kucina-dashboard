var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: {
    css: utils.cssLoaders({
      sourceMap: isProduction
        ? config.build.productionSourceMap
        : config.dev.cssSourceMap,
      extract: isProduction
    })
  }
}
