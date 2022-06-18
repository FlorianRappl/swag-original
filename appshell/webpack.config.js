const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

const url = "https://swag-ecommerce-modulefederation.samples.piral.cloud/";

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3001,
  },
  output: {
    publicPath: "auto",
  },
  optimization: {
    chunkIds: "named",
  },
  stats: {
    chunks: true,
    modules: false,
    chunkModules: true,
    chunkOrigins: true,
  },
  // for reducing the JS files in output
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'appshell_vendors',
  //         chunks: 'all'
  //       }
  //     }
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "AppShell",
      remotes: {
        MyAccount: `MyAccount@${url}/myaccount/remoteEntry.js`,
        Catalogue: `Catalogue@${url}/catalogue/remoteEntry.js`,
        SignIn: `SignIn@${url}/signin/remoteEntry.js`,
      },
      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
        "react-router-dom": {
          singleton: true,
        },
        "@material-ui/core": {
          singleton: true,
        },
        "@material-ui/icons": {
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
