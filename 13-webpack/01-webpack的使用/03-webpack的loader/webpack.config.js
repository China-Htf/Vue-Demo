const path = require('path')                     //引入node包

module.exports = {
  entry: './src/main.js',                        //入口:可以是字符串/数组/对象，这里我们入口只有一个，所以写一个字符串即可
  output: {                                      //出口：通常是一个对象，里面至少包含两个重要属性， path 和 filename
    path: path.resolve(__dirname, 'dist'),       //动态的获取路径(__dirname表示的是当前文件所在的绝对路径)
    filename: 'bundle.js',                       //输出名字
    publicPath: 'dist/',                        //图片大于limit设置的值，会变成图片格式保存在dist目录下
                                                //此时需要路径前添加文件夹路径，后续index.html打包到dist时，删掉此行
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到DOM中
        // 使用多个loader时, 是从右向左
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader", // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader", // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片, 小于limit时, 会将图片编译成base64字符串形式.
              // 当加载的图片, 大于limit时, 需要使用file-loader模块进行加载.
              limit: 13000,
              // img目录下 [name]保存名称 [hash:8]加上8位哈希值 [ext]保留后缀名
              // 若是不加中括号 img/name(名称全变成name) img/name/(img目录下的name目录下) ext(后缀名全是ext)
              name: 'img/[name].[hash:8].[ext]'
            },
          }
        ]
      },
      {
        test: /\.js$/,
        // exclude: 排除
        // include: 包含
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // 我们loader的babel-preset-es2015,所以这里改为es2015
            presets: ['es2015']
          }
        }
      }
    ]
  }
}