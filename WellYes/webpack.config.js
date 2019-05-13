const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.pug/,
        loaders: [
          'html-loader',
          'pug-html-loader'
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
           loader: 'style-loader'
          },
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true, url: false }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                    browsers:['> 1%', 'last 3 version']
                })
              ],
              sourceMap: true,
              url: false,
               }
          }, {
            loader: 'sass-loader',
            options: { sourceMap: true, url: false }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name].[ext]',
              url: false
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 70,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/template/pages/index.pug",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      options: {
        minimize: true
      },
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin([
      { from: './src/assets/images', to: './assets/images' },
      { from: './src/assets/fonts', to: './assets/fonts' },
    ]),
    new OptimizeCssAssetsPlugin({
      assetName: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', {
          discardComments: {
            removeAll: true
          }
        }]
      },
      canPrint: true,
    })
  ]
};