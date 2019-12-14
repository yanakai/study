<template>
    <div>
       <el-container>
           <el-header >
                <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                    <el-radio-button :label="false">展开</el-radio-button>
                    <el-radio-button :label="true">收起</el-radio-button>
                </el-radio-group>
           </el-header>
            <el-container>
                <el-aside width="200px" >
                    <el-menu
                        default-active="$route.path"
                        @open="handleOpen"  
                        @close="handleClose"
                        class="el-menu-vertical-demo"
                        router  unique-opened	
                        :collapse="isCollapse"
                        :default-openeds="open_list"
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
                </el-aside>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
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
    .el-header .fr{
        float: right;
    }
    .el-header .el-menu{
        border-bottom: none;
    }
    .el-aside, .el-main{
        padding-top: 60px;
    }
    .el-aside{
        background: #545c64;
    }
    .el-aside .el-menu{
        border-right: none;
    }
    .el-header {
        background-color:#409EFF;
        color: #fff; 
        padding: 0;
        z-index: 1000;
    }
    .el-main {
        padding: 60px 0px 5px 0px;
    }
</style>
<script>
    export default {
        data () {
            return {
                isCollapse: false,
                open_list: ["1"]
            }
        },
         methods:{
            getUrl(){
            let _this = this;
            _this.currentMenu ='/${this.$route.path.split('/')[1]}'
            console.log('/${this.$route.path.split('/')[1]}')
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        watch:{
            $route(to,from){
            console.log(to.path);
            this.getUrl();
            }
        }
   }

</script>