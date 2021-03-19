import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const muduleA = {
    state: {
      name: 'zhangsan'
    },
    mutations: {
      updateName(state, payload) {
        state.name = payload
      }
    },
    actions: {
      aUpdataName(context) {
        setTimeout(() => {
          context.commit('updateName', 'wangqu')
        },1000)
      }
    },
    getters: {
      fullName(state) {
        return state.name + '111'
      },
      fullName2(state, getters) {
        return getters.fullName + '222'
      },
      fullName3(state, getters, rootState) {
        return getters.fullName2 + rootState.counter
      }
    }
}

const store = new Vuex.Store({
  state: {   //保存状态
    counter: 1000,
    students: [
      {id: 1, name: 'Htf', age: 18},
      {id: 2, name: 'kobe', age: 19},
      {id: 3, name: 'james', age: 20},
      {id: 4, name: 'curry', age: 10},
    ],
    info: {
      // 这些属性都会被加入到响应式系统中，而响应式系统会监听属性的变化
      // 当属性发生变化时，会通知所有界面中用到该属性的地方，让界面发生刷新
      name: 'kobe',
      age: 25,
      height: 1.98
    }
  },
  mutations: {  //方法
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    inerementCount(state, payload) {
      // state.counter += count
      state.counter += payload.count
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
      state.info.name = 'Htf'

      // setTimeout(() => {
      //   state.info.name = 'Htf'
      // },2000)

      // Vuex的store中的state是响应式的，当state中的数据发生改变时，Vue组件会自动更新
      // 这就要求我们必须遵守一些Vuex对应的规则
      // 提前在store中初始化好所需要的属性

      // state.info['adress'] = 'aaa'

      // 利用Vue的属性 也可以做到响应式
      // Vue.set(state.info, 'address', '洛杉矶')

      // 该方式做不到响应式
      // delete state.info.age
      // Vue.delete(state.info, 'age')
    }
  },
  actions: {  //处理异步操作
    // aupdateInfo(context, payload) {
      // setTimeout(() => {
      //   context.commit('updateInfo')
      //   console.log(payload.message);
      //   payload.success()
      // },1000)
    // }
    aupdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload);
          resolve('111')

        },1000)
      })
    }
  },
  getters: {  //计算属性
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20Stu(state) {
      return state.students.filter(s => s.age > 18)
    },
    more20StuLength(state, getters) {
      // getters 就是getters，起什么名字都是getters
      return getters.more20Stu.length
    },
    moreAgeStu(state) {
      // return function(age) {
      // return state.students.filter(s => s.age > age)
      // }
      return age => {
        return state.students.filter(s => s.age> age)
      }
    }
  },
  modules: {  //划分模块 针对模块做数据保存
    a: muduleA
  }
})

// 3.导出store独享
export default store

// 对象的解构
const obj = {
  name: 'Htf',
  age: 18,
  height: 1.78,
  address: '中国'
}
const {name, age, height, address} = obj
