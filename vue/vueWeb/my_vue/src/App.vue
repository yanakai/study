<template>
  <div id="app">
    <router-view/> <!-- 引入路由页面 -->
  </div>
</template>

<script>
export default {
  name: 'App',
}


</script>

<style>
*{
  padding: 0;
  margin: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
  /* 初始化表格操作按钮的大小及样式 */
  .el-button--small, .el-button--small.is-round {
      padding: 4px 8px;
  }
  /*表格每一行被hover时的样式设置*/
  .el-table--enable-row-hover .el-table__body tr:hover>td {
      background-color: rgba(141, 214, 217, .4);
  }
  /*表格某一行被点击时的样式*/
  .el-table__body tr.current-row>td {
      background-color: rgba(15, 232, 240, 0.4);
  }
</style>
