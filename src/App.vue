<template>
  <div id="app">
    <router-view />
    <!-- <ul class="foot-bar">
      <li class="foot-bar-item">
        <router-link to="/">首页</router-link>
      </li>
        <li class="foot-bar-item">
        <router-link to="/category">分类</router-link>
      </li>
        <li class="foot-bar-item">
        <router-link to="/cart">购物车</router-link>
      </li>
        <li class="foot-bar-item">
        <router-link to="/profile">我的</router-link>
      </li>
    </ul>-->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
<style lang="scss" s>
.foot-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 100%;
  height: 1rem;
  background-color: #ccc;
  line-height: 1rem;
  &-item {
    flex-grow: 1;
  }
}
</style>

