const commonPaths =  require("./common-paths");
const webpack = require("webpack");
const HtmlWepackPlugin = require("html-webpack-plugin");

const config = {
  entry: commonPaths.appEntry,
  output: {
    // filename: "[hash].bundle.js",
    filename: "bundle.js",
    path: commonPaths.outpoutPath
  },
  module: {
    rules: [
      {
        test: /\.jpg/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWepackPlugin()
  ]
};

module.exports = config;