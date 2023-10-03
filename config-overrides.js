const webpack = require("webpack");

module.exports = function override(config, env) {
  // Add the modules polyfill
  config.resolve.fallback = {
    ...config.resolve.fallback,
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    zlib: require.resolve("browserify-zlib"),
    url: require.resolve("url"),
    path: require.resolve("path-browserify"),
    assert: require.resolve("assert"),
    os: require.resolve("os-browserify/browser"),
    buffer: require.resolve("buffer"),
  };

  config.plugins.push(
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    })
  );

  return config;
};
