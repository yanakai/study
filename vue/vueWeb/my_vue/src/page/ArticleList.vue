<template>
    <div>
        <!-- highlight-current-row:设置选中高亮 -->
        <!-- :header-cell-style="tableHeaderColor":设置表格头部样式 -->
        <!-- :row-style="tableRowStyle" :设置表格行样式 -->
        <el-table 
            :data="articleData"  
            highlight-current-row 
            :row-style="tableRowStyle" 
            :header-cell-style="tableHeaderColor"
            style="width:100%" 
            border >

            <el-table-column label="序号" align="center" width="50%">
                 <template slot-scope="scope">
                    <span>{{scope.$index + 1}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="articleTitle" label="文章标题" align="center"></el-table-column>
            <el-table-column prop="columnName" label="所属栏目" align="center"></el-table-column>
            <el-table-column prop="releaseTime" label="发布时间" align="center"></el-table-column>
            <el-table-column prop="releaseStatus" label="发布状态" align="center" >
                 <template slot-scope="scope">
                   <span v-if="scope.row.releaseStatus=='0'">未发布</span>
                   <span v-if="scope.row.releaseStatus=='1'">已发布</span>
                </template>
            </el-table-column>
            <el-table-column prop="topStatus" label="置顶状态" align="center">
                 <template slot-scope="scope">
                   <span v-if="scope.row.topStatus=='0'">未置顶</span>
                   <span v-if="scope.row.topStatus=='1'">已置顶</span>
                </template>
            </el-table-column>
            <el-table-column prop="chickNum" label="浏览次数" align="center"></el-table-column>
            <el-table-column prop="createName" label="创建者" align="center"></el-table-column>
            <el-table-column prop="lastModifyTime" label="最后修改时间" align="center"></el-table-column>
            <el-table-column  label="操作" align="center" width="200%">
                <template slot-scope="scope">
                    <el-button size="mini" round icon="el-icon-edit" type="warning" @click="edit(scope.$index,scope.row)">编辑</el-button>
                    <el-button size="mini" round icon="el-icon-delete" type="danger" @click="delete(scope.$index,scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import Vue from "vue"
export default {
    name: "articleDataList",
    //数据
    data(){
        return {
            articleData:[]
        }
    },
    //在这里页面初始化时调用ajax请求方法 初始化方法
    created(){
      this.initArticle();
    },
    methods : {
        initArticle: function(){
            var url = "/api/article/list/";
            Vue.axios.get(url).then((response)=>{
                this.articleData = response.data.rows;
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
            return 'background-color:pink;color:#fff;font-size:3px;'
        },
        //设置表头行的样式
        tableHeaderColor({row,column,rowIndex,columnIndex}){
            return 'background-color:lightblue;color:#fff;font-wight:500;font-size:10x;'

        }
    }
}
</script>