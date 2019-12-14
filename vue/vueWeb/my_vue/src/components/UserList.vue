<template>
    <div>
        <el-table :data="userData" border justify="center" style="width:100%">
            <el-table-column prop="userName" label="登录用户"></el-table-column>
            <el-table-column prop="trueName" label="真实姓名"></el-table-column>
            <el-table-column prop="email" label="邮箱"></el-table-column>
            <el-table-column prop="phoneNumber" label="手机号"></el-table-column>
            <el-table-column prop="sex" label="性别"></el-table-column>
        </el-table>
    </div>
</template>
<script>
import Vue from "vue"
export default {
    name: "userDataList",
    data(){
        return {
            userData:[]
        }
    },
    //在这里页面初始化时调用ajax请求方法
    created(){
      this.initUser();
    },
    methods : {
        initUser: function(){
            var url = "/api/user/list/";
            Vue.axios.get(url).then((response)=>{
                this.userData = response.data.rows;
                console.log("response: "+response.data.rows);
            }).catch((error)=>{
                console.log("error!"+error);
            });
        }
    }
}
</script>