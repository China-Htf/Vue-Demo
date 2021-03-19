export default {
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
}
