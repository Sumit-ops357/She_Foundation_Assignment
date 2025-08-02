module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Fix for the allowedHosts warning
      if (webpackConfig.devServer) {
        webpackConfig.devServer.allowedHosts = 'all';
      }
      return webpackConfig;
    },
  },
}; 