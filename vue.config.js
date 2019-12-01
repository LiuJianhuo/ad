
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api.zk020.cn/',
        changeOrigin: true,
        pathRewrite: {
          // '^/api': ''
        }
      }
    }
  }
}
