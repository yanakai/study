<template>
    <div>
        <!-- highlight-current-row:设置选中高亮 -->
        <!-- :header-cell-style="tableHeaderColor":设置表格头部样式 -->
        <!-- :row-style="tableRowStyle" :设置表格行样式 -->
        <el-table 
            :data="userData"  
            highlight-current-row 
            :row-style="tableRowStyle" 
            :header-cell-style="tableHeaderColor"
            style="width:100%" 
            border >

            <el-table-column label="序号" align="center" width="70%">
                 <template slot-scope="scope">
                    <span>{{scope.$index + 1}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="userName" label="登录用户" align="center"></el-table-column>
            <el-table-column prop="trueName" label="真实姓名" align="center"></el-table-column>
            <el-table-column prop="email" label="邮箱" align="center"></el-table-column>
            <el-table-column prop="phoneNumber" label="手机号" align="center"></el-table-column>
            <el-table-column prop="sex" label="性别" align="center">
                 <template slot-scope="scope">
                   <span v-if="scope.row.sex=='0'">男</span>
                   <span v-if="scope.row.sex=='1'">女</span>
                </template>
            </el-table-column>
            <el-table-column  label="操作" align="center">
                <template slot-scope="scope">
                    <el-button size="mini" round icon="el-icon-edit" type="warning" @click="edit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" round icon="el-icon-delete" type="danger" @click="delete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import Vue from "vue"
export default {
    name: "userDataList",
    //数据
    data(){
        return {
            userData:[]
        }
    },
    //在这里页面初始化时调用ajax请求方法 初始化方法
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
        },
        //表格编辑方法
        edit: function(){
            alert("78899");
        },
        //设置表格行的样式
        tableRowStyle({row,rowIndex}){
            return 'background-color:pink;color:#fff;font-size:7px;'
        },
        //设置表头行的样式
        tableHeaderColor({row,column,rowIndex,columnIndex}){
            return 'background-color:lightblue;color:#fff;font-wight:500;font-size:15px;'

        }
    }
}
</script>