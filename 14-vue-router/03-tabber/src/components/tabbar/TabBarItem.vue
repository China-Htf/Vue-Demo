<template>
      <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
          <slot name="item-icon"></slot>
        </div>
        <div v-else>
          <slot name="item-icon-active"></slot>
        </div>
        <!-- <div :class="{active: isActive}"> -->
        <div :style="activeStyle">
          <slot name="item-text"></slot>
        </div>
      </div>
</template>

<script>
export default {
  data() {
    return {
      // isActive: true
    }
  },
  props: {
    Path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isActive() {
      // 第一个path 是url栏path 第二个path data中定义的
      return this.$route.path.indexOf(this.Path) !== -1
    },
    activeStyle() {
      // 若是当前item处于活跃状态下 判断有没有传
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.Path)
    }
  }
}
</script>

<style>
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 4px;
  }
  .active {
    color: red;
  }
</style>
