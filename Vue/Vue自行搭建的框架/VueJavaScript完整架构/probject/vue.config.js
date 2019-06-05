const path = require("path");

const resolve = dir => {
    return path.join(__dirname, dir)
}
const BASE_URL = process.env.NODE_ENV === "production" ? "./" : "./";
module.exports = {
    baseUrl: BASE_URL,
    outputDir: "dist", // 打包生成的生产环境构建文件的目录
    //assetsDir: "", // 放置生成的静态资源路径，默认在outputDir
    indexPath: "index.html", // 指定生成的 index.html 输入路径，默认outputDir
    pages: undefined, // 构建多页
    productionSourceMap: false, // 开启 生产环境的 source map?
    chainWebpack: config => {
        // 配置路径别名
        config.resolve.alias
            .set("@", resolve("src"))
            .set("_c", resolve("src/components"));
    },
    css: {
        modules: false, // 启用 CSS modules
        extract: true, // 是否使用css分离插件
        sourceMap: false, // 开启 CSS source maps?
        loaderOptions: {
            sass: {
                data: `@import "~@/assets/Css/uni.scss";`
            }
        } // css预设器配置项
    },
    devServer: {
        port: 8080, // 端口
        proxy: {
            // 设置代理
            "/api": {
                target: "http://elderlyweixin.shfusion.com", // 你请求的第三方接口
                changeOrigin: true,
                pathRewrite: {
                    // 路径重写，
                    "^/api": "" // 替换target中的请求地址，也就是说以后你在请求http://elderlyweixin.shfusion.com/XXXXX这个地址的时候直接写成/api/XXXXX即可。
                }
            }
        }
    }

};