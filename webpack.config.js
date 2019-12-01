const isDev = process.env.NODE_ENV !== "production";

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: isDev ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "docs")
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: "body",
      template: path.join(__dirname, "/src/index.html")
    })
  ],
  resolve: {
    extensions: [".js", ".tsx", ".ts"]
  }
};
