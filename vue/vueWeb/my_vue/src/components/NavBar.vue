<template>
    <div class="menu-bar-container">
         <!-- logo -->
        <div class="logo" :style="{'background-color':themeColor}" :class="collapse?'menu-bar-collapse-width':'menu-bar-width'"
        @click="$router.push('/')">
            <img v-if="collapse" src="@/assets/logo.png"/> <div>{{collapse?'':appName}}</div>
        </div>
        <!-- 导航菜单树组件，动态加载菜单 -->
        <menu-tree v-for="item in navTree" :key="item.id" :menu="item"></menu-tree>
        <el-menu
            default-active="1"
            @open="handleOpen"  
            @close="handleClose"
            @select="handleselect"
            :class="collapse?'menu-bar-collapse-width':'menu-bar-width'"
            router  unique-opened	
            :collapse="collapse"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span>文章管理</span>
                </template>
                <el-menu-item  index="/article/list">文章管理</el-menu-item>
                <el-menu-item index="/column/list">栏目管理</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>系统管理</span>
                </template>
                <el-menu-item  index="/user/list">用户管理</el-menu-item>
                <el-menu-item index="/role/list">角色管理</el-menu-item>
                <el-menu-item index="/menu/list">菜单管理</el-menu-item>
                <el-submenu index="#">
                    <template slot="title">选项4</template>
                    <el-menu-item index="#">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default{
    data () {
        return {
        }
    },
    computed: {
        ...mapState({
            appName: state=>state.app.appName,
            themeColor: state=>state.app.themeColor,
            collapse: state=>state.app.collapse
        })
    },
    methods:{
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleselect(a, b) {
            console.log('handleselect')
        },
    },
    
}
</script>
<style >
.menu-bar-container{
    width: 200px;
    position: fixed;
    top: 0px;
    left: 0;
    bottom: 0;
    z-index: 1020;
}
 .menu-bar-container .el-menu {
    position:absolute;
    top: 60px;
    bottom: 0px;
    text-align: left;
  }

.menu-bar-container .logo {
    position:absolute;
    top: 0px;
    height: 60px;   
    line-height: 60px;
    background: #545c64;
    cursor:pointer;
    font-size: 25px;
}
.menu-bar-container .logo  img {
    width: 40px;
    height: 40px;
    border-radius: 0px;
    margin: 10px 10px 10px 10px;
    float: left;
}

.menu-bar-container .menu-bar-width {
    width: 200px;
}
.menu-bar-container .menu-bar-collapse-width {
    width: 65px;
}
    
   
</style>