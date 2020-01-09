<template>
    <div class="headbar" :style="{'background':themeColor}"
        :class="$store.state.app.collapse?'position-collapse-left':'position-left'"> 
        <span class="hamburg">
            <el-menu class="el-menu-demo" :background-color="themeColor" text-color="#fff"  mode="horizontal">
                <el-menu-item index="1" @click="onCollapse"><hamburger :isActive="collapse"></hamburger></el-menu-item>
            </el-menu>
        </span>
        <span class="userinfo">
             <el-menu class="el-menu-demo" :background-color="themeColor" :text-color="themeColor" :active-text-color="themeColor" mode="horizontal">
                <el-submenu index="1"  popper-class="infoItem">
                    <template slot="title">
                        <div class='welcome'>
                            <span class="name">你好,</span>
                            <span class='name avatarname'>闫凯</span>
                        </div>
                        <img src="@/assets/img/avatar-2.jpg" class='avatar' alt="">
                    </template>
                    <el-menu-item index="1-1" @click="setDialogInfo('info')" style="color:white">个人信息</el-menu-item>
                    <el-menu-item index="1-2" @click="setDialogInfo('pass')" style="color:white">修改信息</el-menu-item>
                    <el-menu-item index="1-3" @click="setDialogInfo('logout')" style="color:white">退出</el-menu-item>
                </el-submenu>
             </el-menu>
        </span>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import mock from "@/mock/index" //此地方引入mock暂时本页面没有用，但是整个项目能够使用模拟数据接口就必须引他，可以放在任何一个vue文件引
import Hamburger from "@/components/Hamburger"
export default{
     components:{
        Hamburger
    },
    data () {
        return {
        }
    },
    methods:{
        // 折叠导航栏
        onCollapse: function() {
            this.$store.commit('onCollapse')
        },
    },
    computed:{
        ...mapState({
            themeColor: state=>state.app.themeColor,
            collapse: state=>state.app.collapse
        })
    }
 }
</script>
<style lang="scss">
.headbar {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1030;
  height: 60px;
  line-height: 60px;
  border-color: rgba(180, 190, 190, 0.8);
  border-left-width: 1px;
  border-left-style: solid;
}
.hamburg {
  float: left;
}
.position-left {
  left: 200px;
}
.position-collapse-left {
  left: 65px;
}
.userinfo {
    line-height: 60px;
    text-align:right;
    float: right;
}
.el-menu-demo .el-submenu{
    float: right;
}
.avatar{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    vertical-align: middle;
    display: inline-block;
}
.langAvatar{
    width: 24px;
    height: 24px;
    border-radius: 50%;
    vertical-align: middle;
    display: inline-block;
}
.welcome{
    display: inline-block;
    vertical-align: middle;
    padding: 0 5px;
    .name{
        line-height: 20px;
        text-align: center;
        font-size: 12px;
        color: white;
    }
    .avatarname{
        color:#a9d86e;
        font-weight:bolder;
        font-size: 13px;
    }
}
.username {
    cursor: pointer;
    margin-right: 5px;
}
.border{
    border:1px solid;
}
.notify-row{
    line-height:60px;
    flex:1;
    ul{
        display: flex;
        justify-content: space-around;
    }
}

ul.top-menu > li {
    position: relative;
}
</style>