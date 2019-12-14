<template>
    <div>
       <el-container>
           <el-header >
           </el-header>
            <el-container>
                <el-aside width="200px" >
                    <el-menu
                        default-active="1"
                        class="el-menu-vertical-demo"
                        router 
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                        <el-submenu index="1">
                            <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>系统管理</span>
                            </template>
                            <el-menu-item  index="/user/list">用户管理</el-menu-item>
                            <el-menu-item index="/role/list">角色管理</el-menu-item>
                            <el-menu-item index="/menu/list">菜单管理</el-menu-item>
                            <el-submenu index="#">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3" disabled>
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航四</span>
                        </el-menu-item>
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
</style>
<script>
    export default {
        data () {
            return {
            }
        },
         methods:{
            getUrl(){
            let _this = this;
            _this.currentMenu ='/${this.$route.path.split('/')[1]}'
            console.log('/${this.$route.path.split('/')[1]}')
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