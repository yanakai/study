<template>
    <div calss="container">
       <!-- 导航菜单栏 -->
        <nav-bar></nav-bar>
        <!-- 头部区域 -->
        <head-bar></head-bar>
        <!-- 主内容区域 -->
        <main-content></main-content>
    </div>
</template>
<style>
    .el-container{
        position: absolute; 
        width: 100%; 
        top: 0px ; 
        left: 0 ; 
        bottom: 0;
    }   
</style>
<script>
    import NavBar from '../components/NavBar'
    import HeadBar from '../components/HeadBar'
    import MainContent from '../components/MainContent'

    export default {
        name: "Index",
        components: {
            NavBar,
            HeadBar,
            MainContent
        },
   }

</script>
<style>
  .container {
    position:absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
</style> 