<template>
  <tab-bar>
      <!-- <tab-bar-item Path="/home" activeColor="green"> -->
      <tab-bar-item Path="/home">
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item Path="/category">
        <img slot="item-icon" src="../../assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item Path="/cart">
        <img slot="item-icon" src="../../assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item Path="/profile">
        <img slot="item-icon" src="../../assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '../tabbar/tabbar'
import TabBarItem from '../tabbar/TabBarItem'
export default {
    components: {
      TabBar,
      TabBarItem
    }
}
</script>

<style>

</style>
