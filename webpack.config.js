const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const styleLoader = {
  loader:'style-loader',

}

const cssLoader= {
    loader:'css-loader',
    options: {
        sourceMap: true
    },
}

const sassLoader= {
    loader:'sass-loader',
    options: {
        sourceMap: true
    },
}

const resolveUrlLoader= {
    loader:'resolve-url-loader',
    options: {
        sourceMap: true
    },
}


module.exports = {

    optimization: {
        splitChunks: {
            name: 'layout',
            minChunks: 2,
            //chunks: 'all'
        },
        runtimeChunk: {
            name: 'manifest'
        }
    },
    entry: {
        rep_log:'./assets/js/rep_log.js',
        login:'./assets/js/login.js',
        layout:'./assets/js/layout.js',
    },
    module:{
      rules:[
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use:{
                  loader: 'babel-loader',
                  options: {
                      cacheDirectory: true
                  }
              }
          },
          {
              test: /\.css$/,
              use: [
                  styleLoader,
                  cssLoader
              ]
          },
          {
              test: /\.scss$/,
              use: [
                  styleLoader,
                  cssLoader,
                  resolveUrlLoader,
                  sassLoader,
              ]
          },
          {
              test: /\.(png|svg|jpg|jpeg|gif)$/,
              use: [
                  {
                      loader: 'file-loader',
                      options:{
                          name:'[name]-[hash:6].[ext]'
                      }
                  }
              ]
          },
          {
              test: /\.(woff|ttf|eot|woff2|otf)$/,
              use: [
                  {
                      loader: 'file-loader',
                      options:{
                          name:'[name]-[hash:6].[ext]'
                      }
                  }
              ]
          }
      ]
    },
    output:{
        path:path.resolve(__dirname, 'web','build'),
        filename:'[name].js',
        publicPath:'/build/'
    },
    plugins:[
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $:'jquery',
            'window.jQuery':'jquery'
        }),
        new CopyWebpackPlugin([
            {
                from:'./assets/static',to:'static'
            }
        ]),

    ],
    devtool: 'inline-source-map'
}

