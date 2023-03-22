// vue-cli的配置文件

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        // target: "http://test.my-site.com",
        target: "http://localhost:7001",
      },
      "/static": {
        target: "http://localhost:7001",
      },
    },
  },
  configureWebpack: require("./webpack.config.js"),
};
