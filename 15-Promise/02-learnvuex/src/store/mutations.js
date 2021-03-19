export default {
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
}
