
module.exports = {
    devServer: {
      port: 8888, // 端口
      proxy: { 
        // 设置代理
        "/api": {
          target: "http://elderlyweixin.shfusion.com", // 你请求的第三方接口
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            // 路径重写，
            "^/api": "" // 替换target中的请求地址，也就是说以后你在请求http://api.jisuapi.com/XXXXX这个地址的时候直接写成/api即可。
          }
        }
      }
    }
  };