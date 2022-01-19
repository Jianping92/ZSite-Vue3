// const path = require("path");
// const fs = require("fs");
// const resolve = (dir) => path.join(__dirname, dir);
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
// const IS_DEV = ["development"].includes(process.env.NODE_ENV);

module.exports = {
  publicPath: IS_PROD ? process.env.VUE_APP_PUBLIC_PATH : "./", // 默认'/'，部署应用包时的基本 URL
  outputDir: "dist",
  assetsDir: "static",
  // 去除生产环境的 source map
  productionSourceMap: !IS_PROD,
  devServer: {
    open: true,
    hot: true,
    port: 7878,
    proxy: {
      "/api": {
        target: "https://www.baidu.com",
        secure: false,
        changeOrigin: true
      }
    }
  }
};
