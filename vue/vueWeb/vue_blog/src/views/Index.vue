<template>
  <div class="container">
    <!-- 导航菜单栏 -->
    <nav-bar></nav-bar>
    <!-- 头部区域 -->
    <head-bar></head-bar>
    <!-- 主内容区域 -->
    <main-content></main-content>
  </div>
</template>
<script>
import HeadBar from "../components/HeadBar"
import NavBar from "../components/NavBar"
import MainContent from "../components/MainContent"
export default {
  components:{
        HeadBar,
        NavBar,
        MainContent
  }
};
</script>
<style scoped lang="scss">
  .container {
    position:absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
</style> 