const path = require("path");

const resolve = dir => {
    return path.join(__dirname, dir)
}

// 线上打包路径，请根据项目实际线上情况
const BASE_URL = process.env.NODE_ENV === "" ? "/" : "/";

module.exports = {
    baseUrl: BASE_URL,
    outputDir: "dist", // 打包生成的生产环境构建文件的目录
    assetsDir: "", // 放置生成的静态资源路径，默认在outputDir
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
        loaderOptions: {} // css预设器配置项
    },
    devServer: {
        port: 8080, // 端口
        proxy: {
            // 设置代理
            "/proxy": {
                target: "http://m.kugou.com", // 你请求的第三方接口
                secure: false,// true-https false-http
                changeOrigin: true,
                pathRewrite: {
                    // 路径重写，
                    "^/proxy": "" // 替换target中的请求地址，也就是说以后你在请求http://api.jisuapi.com/XXXXX这个地址的时候直接写成/api即可。
                },
                headers: {
                    "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Mobile Safari/537.36"
                }
            }
        }
    }
};
