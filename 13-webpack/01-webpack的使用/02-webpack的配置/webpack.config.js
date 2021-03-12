const path = require('path')                     //引入node包

module.exports = {
  entry: './src/main.js',                        //入口
  output: {                                      //出口
    path: path.resolve(__dirname, 'dist'),       //动态的获取路径(__dirname表示的是当前文件所在的绝对路径)
    filename: 'bundle.js'                        //输出名字
  }
}