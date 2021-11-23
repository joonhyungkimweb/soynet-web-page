module.exports = {
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  pwa: {
    name: 'Soynet',
    themeColor: '#f96332',
    msTileColor: '#2ca8ff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#f96332'
  },
  lintOnSave: false,
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
