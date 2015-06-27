var webpack               = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var HtmlWebpackPlugin     = require('html-webpack-plugin');


var webpackConfig = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:9090', // WebpackDevServer host and port
      'webpack/hot/only-dev-server',
      './app/index.jsx'
    ],
    vendor: './app/vendors/index.js'
  },
  output: {
    path: './build/dev_build',
    filename: 'app.bundle-[hash].js'
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      // IMPORTANT: we don't want to process EVERY single JS file with babel
      // loader. We only want to process the files inside our app structure
      // otherwise this could get very slow or even fail.
      {test: /\.jsx?$/, include: [/app/], loaders: ['react-hot', 'babel-loader?optional=runtime']}
    ]
  },
  resolve: {
    // Needed so you can require('a') instead of require('a.jsx')
    extensions: ['', '.js', '.jsx', '.json', '.styl'],
    // Let us do things like require('app/stores/Channel')
    root: __dirname
  },
  plugins: [
    new WebpackNotifierPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle-[hash].js', minChunks: Infinity}),
    new HtmlWebpackPlugin({
      template: './app/assets/index.template.html'
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ]
};


module.exports = webpackConfig;
