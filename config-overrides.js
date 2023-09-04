const { override, addWebpackPublicPath } = require('customize-cra')

module.exports = override(addWebpackPublicPath('/lexicon/'))
