const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy: {
      '/api':{
          target:'http://172.30.35.83:8080/',
          
          // target:'http://127.0.0.1:8888/',
          changeOrigin:true,
          pathRewrite:{
              '^/api': '/' 
          }
      },
      '/other':{
        target:'https://www.baidu.com/',
        // target:'http://127.0.0.1:8888/',
        changeOrigin:true,
        pathRewrite:{
            '^/other': '/' 
        }
      },
      '/self':{
        target:'http://127.0.0.1:8888/',
        changeOrigin:true,
        pathRewrite:{
            '^/self': '/' 
        }
      },
    }
  }
})
