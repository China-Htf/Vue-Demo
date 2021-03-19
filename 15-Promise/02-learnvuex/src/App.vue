<template>
  <div id="app">
    <h2>------App内容------</h2>
    <h2>{{message}}</h2>
    <h3>{{$store.state.counter}}</h3>

    <h2>-----App内容: modules-----</h2>
    <h3>{{$store.state.a.name}}</h3>
    <button @click="updateName">修改信息</button>
    <h3>{{$store.getters.fullName}}</h3>
    <h3>{{$store.getters.fullName2}}</h3>
    <h3>{{$store.getters.fullName3}}</h3>
    <button @click="asyncUpdateName">异步修改名字</button>

    <h2>----------App内容: info对象的内容是否是响应式----------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>------App内容:mutations------</h2>
    <button @click="addition"> + </button>
    <button @click="subtraction"> - </button>
    <button @click="addCount(5)"> +5 </button>
    <button @click="addCount(10)"> +10 </button>
    <button @click="addStudent"> 添加学生 </button>

    <h2>------App内容:getters------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20Stu}}</h2>
    <h2>{{$store.getters.more20StuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(18)}}</h2>

    <h2>----Hello Vue内容----</h2>
    <hello-vue></hello-vue>

  </div>
</template>

<script>
import HelloVue from './components/HelloVue.vue'

export default {
  name: 'App',
  data() {
    return {
      message: '我是App组件'
    }
  },
  components: {
    HelloVue
  },
  methods: {
    addition() {
      this.$store.commit('increment')
    },
    subtraction() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      // 1.普通的提交封装
      // this.$store.commit('inerementCount', count)

      // 2.特殊的提交封装 payload
      this.$store.commit({
        type: 'inerementCount',
        count
      })
    },
    addStudent() {
      const stu = {id: 5, name: 'lilei', age: 21}
      this.$store.commit('addStudent', stu)
    },
    updateInfo() {
      // this.$store.dispatch('aupdateInfo')
      // this.$store.dispatch('aupdateInfo', {
      //   message: '我是返回的信息',
      //   success: () => {
      //     console.log('里面传入完成');
      //   }
      // })

       this.$store.dispatch('aupdateInfo','我是提交的信息')
       .then(res => {
         console.log('已经完成了提交');
         console.log(res);
       })
    },
    updateName() {
      this.$store.commit('updateName', 'lisi')
    },
    asyncUpdateName() {
      this.$store.dispatch('aUpdataName')
    }
  }
}
</script>

<style>

</style>
