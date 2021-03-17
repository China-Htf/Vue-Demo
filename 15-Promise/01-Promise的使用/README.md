        Promise的三种状态

首先，当我们开发者有异步操作时，就可以给异步操作包装一个Promise
  异步操作之后会有三种状态
我们一起来看一下这三种状态
  pending：等待状态，比如正在进行网络请求，或者定时器没有到时间
  fulfill：满足状态，当我们主动回调了resolve时，就处于该状态，并且会回调.then()
  reject: 拒绝状态，当我们主动回调了reject时，就处于该状态，并且会回调.catch()

        Promise链式调用
我们再看Promise的流程图时，发现无论是then还是catch都可以返回一个Promise对象
所以，我们的代码其实是可以进行链式调用的
我们直接通过Promise包装了一下新的数据，将Promise对象返回了
  Promise.resolvw(): 将数据包装成Promise对象，并且在内部回调resolve()函数
  Promise.reject(): 将数据包装成Promise对象，并且在内部回调reject()函数