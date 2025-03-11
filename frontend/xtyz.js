// this file contains extras that should override angular's default configs

const { CycloneDxWebpackPlugin } = require('@cyclonedx/webpack-plugin')

module.exports = {
  plugins: [
    // @see https://www.npmjs.com/package/@cyclonedx/webpack-plugin
    new CycloneDxWebpackPlugin({
      outputLocation: '../bom', // The path is relative to webpack's overall output path,
      includeWellknown: false
    })
  ]
}

/* 
Copyright (c) D2Cy
Copyright (c) D2Cyfff
Copyright (c) D2Cyhh
  */
