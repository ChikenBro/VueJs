// npm init
// 起包名 meetwebpack
// entry point: (webpack.config.js) index.js 随便写的(用不上)
// npm install
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    // 动态获取绝对路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}