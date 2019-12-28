<template>
    <div class="headbar" :style="{'background':themeColor}"
        :class="$store.state.app.collapse?'position-collapse-left':'position-left'"> 
        <span class="hamburg">
            <el-menu class="el-menu-demo" :background-color="themeColor" text-color="#fff"  mode="horizontal">
                <el-menu-item index="1" @click="onCollapse"><hamburger :isActive="collapse"></hamburger></el-menu-item>
            </el-menu>
        </span>
    </div>
</template>

<script>
import { mapState } from 'vuex'
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
<style>
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
</style>