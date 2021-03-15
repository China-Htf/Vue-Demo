<template>
  <div id="app">
    <!--
      tag:tag可以指定<router-link>之后渲染成什么组件，比如上面的代码会被渲染成一个<button>元素，而不是<a>
      replace:replace不会留下history记录，所以指定replace的情况下，后退键返回不能返回到上一个页面中
     -->
    <!-- <router-link to="Home" tag="button" replace>首页</router-link>
    <router-link to="About" tag="button" replace>关于</router-link> -->

    <!--<button @click="homeClick">首页</button>-->
    <!--<button @click="aboutClick">关于</button>-->

    <router-link to="/home" replace>首页</router-link>
    <router-link to="/about" replace>关于</router-link>

    <!-- <router-link :to="'/user/' + userId" replace>用户</router-link>
    <router-link :to="{path: '/profile', query: {name: 'Htf', age: 20, height: 1.88}}">档案</router-link> -->

    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'lisi'
    }
  },
  methods: {
    // 代码的方式修改路由
    homeClick() {
      // 通过代码的方式修改路由 vue-router
      // replace 不会放在栈 push 会放在栈
      this.$router.push('/home')
    },
    aboutClick() {
      this.$router.push('/about')
    },
    userClick() {
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'Htf',
          age: 18,
          height: 1.88
        }
      })
    }
  }
}
</script>

<style>
  .active {
    color: #f00;
  }
</style>
