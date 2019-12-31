<template>
    <div class="menu-bar-container">
         <!-- logo -->
        <div class="logo" :style="{'background-color':themeColor}" :class="collapse?'menu-bar-collapse-width':'menu-bar-width'"
        @click="$router.push('/')">
            <img v-if="collapse" src="@/assets/logo.png"/> <div>{{collapse?'':appName}}</div>
        </div>
        <!-- 导航菜单树组件，动态加载菜单 -->
           <menu-tree></menu-tree>
        
    </div>
</template>
<script>
import { mapState } from 'vuex'
import MenuTree from "./MenuTree"
export default{
    data () {
        return {
        }
    },
    components:{
        MenuTree
    },
    computed: {
        ...mapState({
            appName: state=>state.app.appName,
            themeColor: state=>state.app.themeColor,
            collapse: state=>state.app.collapse
        })
    },
    
}
</script>
<style >
.menu-bar-container{
    width: 200px;
    position: fixed;
    top: 0px;
    left: 0;
    bottom: 0px;
    z-index: 1020;
}
.menu-bar-container .logo {
    position:absolute;
    top: 0px;
    height: 60px;   
    line-height: 60px;
    background: #545c64;
    cursor:pointer;
    font-size: 25px;
    color: white;
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