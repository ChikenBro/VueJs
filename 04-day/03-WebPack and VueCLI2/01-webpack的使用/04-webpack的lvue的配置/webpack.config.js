// npm init
// 起包名 meetwebpack
// entry point: (webpack.config.js) index.js 随便写的(用不上)
// npm install
const path = require('path');
const webpack = require('webpack')
module.exports = {
  entry: './src/main.js',
  output: {
    // 动态获取绝对路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // 所有的url会自动拼接这个路径
    publicPath: 'dist/',
  },
  module: {
    rules: [{
        test: /\.css$/,
        //只负责加载css文件 不负责解析 
        //使用多个loader时 是从右向左读的
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader",
          options: {
            strictMath: true,
            noIeCompat: true
          }
        }]
      }, {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            //当加载的图片小于limit时 会将图片编译成base64字符串的形式
            //大于的话要使用 file-loader
            limit: 8,
            //对图片命名
            name: 'img/[name].[hash:8].[ext]'
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: ['@babel/preset-env']
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: ['@babel/preset-env']
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.css', '.less'],
    // alias 别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('最终版权归属zrf')
  ]
}