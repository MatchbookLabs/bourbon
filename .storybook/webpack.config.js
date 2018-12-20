// https://github.com/wahengchang/react-redux-boilerplate/blob/aa2f4d6fd0ce55525bf471904eb82683a3d5d9a6/.storybook/webpack.config.js

// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

// const path = require("path");
const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin()
    // your custom plugins
  ],
  entry: ['webpack-hot-middleware/client'],
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js?$/,
        loaders: [
          {
            loader: require.resolve("@storybook/addon-storysource/loader"),
            options: {
              parser: "javascript",
              prettierConfig: {
                printWidth: 80,
                singleQuote: false
              }
            }
          }
        ],
        enforce: "pre"
      }
    ]
  }
};
