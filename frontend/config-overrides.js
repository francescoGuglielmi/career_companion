module.exports = function override(config, env) {
  if (env === 'development') {
    config.devServer = {
      ...config.devServer,
      onAfterSetupMiddleware: function (devServer) {
        // Suppress specific deprecation warnings
        devServer.ignoreWarnings([
          /'onAfterSetupMiddleware' option is deprecated/,
          /'onBeforeSetupMiddleware' option is deprecated/,
        ]);
      },
    };
  }
  return config;
};