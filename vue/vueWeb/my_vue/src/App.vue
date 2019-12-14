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
  body {
      margin: 0;
      padding: 0;
      font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
      font-size: 14px;
      -webkit-font-smoothing: antialiased;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  .el-submenu [class^=fa] {
      vertical-align: baseline;
      margin-right: 10px;
  }

  .el-menu-item [class^=fa] {
      vertical-align: baseline;
      margin-right: 10px;
  }

  .toolbar {
      background: #f2f2f2;
      padding: 10px;
      margin: 10px 0;
  }
  .el-form-item {
      margin-bottom: 10px;
  }
  

  .fade-enter-active,
  .fade-leave-active {
      transition: all 0.2s ease;
  }

  .fade-enter,
  .fade-leave-active {
      opacity: 0;
  }
  /* 初始化表格操作按钮的大小及样式 */
  .el-button--mini, .el-button--mini.is-round {
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
