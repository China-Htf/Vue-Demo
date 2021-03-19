import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import muduleA from './modules/muduleA'
// 1.安装插件
Vue.use(Vuex)

const state = {   //保存状态
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
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
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
