
module.exports = {
  
    pwa: {
      name: 'Fazzy D',
      themeColor: '#d79947',
      msTileColor: '#d79947',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      assetsVersion:'5',
      manifestPath:'public/manifest.json',
  
      // configure the workbox plugin
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        swSrc: './public/sw.js',
        exclude: ['_redirects'],
      
      }
    },

    chainWebpack: (config) => {

      config.plugins.delete('prefetch')
    }
  }

