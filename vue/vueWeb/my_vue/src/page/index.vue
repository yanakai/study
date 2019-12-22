<template>
    <div class="home rflex">
        <left-menu></left-menu>
        <div class="menu_right wflex el-scrollbar" ref="menu_right" style="{left:sidebar.width+'px'}">
            <head-nav></head-nav>
            <div class="menu_content" ref="menu_content">
                <bread></bread>
                <router-view></router-view><!--页面渲染入口-->
            </div>
            <footerNav></footerNav>
        </div>
    </div>
</template>
<script>
    import { mapState, mapGetters } from 'vuex'

    import HeadNav from '../components/headNav';
	import LeftMenu from '../components/leftMenu';
	import Bread from '../components/bread';
	import FooterNav from '../components/footerNav';

    export default {
        name: 'Index',
        data(){
            return {
            }
        },
        computed:{
            ...mapGetters(['sidebar']),
        },
        components:{
            HeadNav,
            LeftMenu,
            Bread,
            FooterNav
        },
        created() {
        },
        mounted (){
        },
        watch:{
          
        }
    }
</script>
<style lang="less">
    .home{
        .menu_right{
            overflow: auto;
            position: absolute;
            right:0;
            top:0;
            bottom:0;
            background:#F6F7FC;
            .menu_content{
                position: relative;
                margin-top:60px;
                width:100%;
                background:#f0f2f5;
            }

        }
    }
</style>
