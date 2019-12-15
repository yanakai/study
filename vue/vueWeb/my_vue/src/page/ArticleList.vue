<template>
    
    <div>
        <div></div>
        <div>
            <el-row style="margin-top:25px;">
                <el-col :span="1" class="grid">
                    <el-button icon="el-icon-circle-plus" type="primary"  @click="addFlag=true;dialogVisible = true ">添加</el-button>
                </el-col>
            </el-row>
            <!-- highlight-current-row:设置选中高亮 -->
            <!-- :header-cell-style="tableHeaderColor":设置表格头部样式 -->
            <!-- :row-style="tableRowStyle" :设置表格行样式 -->
            <el-table 
                :data="articleData"  
                v-loading="loading"
                element-loading-text="数据加载中"
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
                        <el-button size="mini" round icon="el-icon-edit" type="warning"  @click="editInfo(scope.row)">编辑</el-button>
                        <el-button size="mini" round icon="el-icon-delete" type="danger" @click="deleteInfo(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-dialog
                :title="addFlag?'新增文章':'修改文章'"
                style="text-align:left !important"
                :visible.sync="dialogVisible"
                :before-close="handleClose"
            >
                <el-form ref="info" label-width="100px">
                    <el-form-item label="标题：" >
                        <el-input v-model="info.articleTitle" placeholder="请输入文章标题"></el-input>
                    </el-form-item>
                    <el-form-item label="选择图片：" >
                        <el-upload 
                        class="upload-demo"
                        action="这里随便写，反正用不到，但是又必须要写，无奈"  
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        list-type="picture">
                        <el-input type="text"></el-input>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="所属栏目：" prop="info.columnId">
                        <el-select v-model="info.columnId" placeholder="请选择所属栏目" style="width: 100%;">
                            <el-option  v-for="item in columnList" :key="item.columnId" :label="item.columnName"
                                :value="item.columnId"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="简介：" >
                        <el-input type="textarea" :rows="7" v-model="info.articleAbstract" placeholder="请输入文章简介"></el-input>
                    </el-form-item>
                    <el-form-item label="内容：">
                        <el-input v-model="info.articleContent" placeholder="请输入文章内容"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button type="success" @click="saveArticleInfo()">提交</el-button>
                    <el-button type="primary" @click="dialogVisible = false">取消</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>
<script>
import Vue from "vue";
import qs from "qs";
export default {
    name: "articleDataList",
    //数据
    data(){
        return {
            dialogVisible: false,//弹出框是否显示
            articleData:[],//文章列表数据
            loading: true, //是否加载loading
            addFlag: true, //添加和编辑页面的title区别
            info:{}, //添加和编辑页面的对象
            columnList:[] //所属栏目下拉列表
        }
    },
    //在这里页面初始化时调用ajax请求方法 初始化方法
    created(){
      this.initArticle();
    },
    //页面监听
    watch: {
        dialogVisible(){ //貌似可以随便定义
            if(this.dialogVisible){ //监听弹窗是否打开
                var url = "/api/column/list/";
                Vue.axios.get(url).then((response)=>{
                    this.columnList = response.data.rows;
                }).catch((error)=>{
                    console.log("error!"+error);
                });
            }
        }
    },
    methods : {
        initArticle: function(){
            var url = "/api/article/list/";
            Vue.axios.get(url).then((response)=>{
                this.articleData = response.data.rows;
                this.loading=false;//关闭loading
            }).catch((error)=>{
                console.log("error!"+error);
            });
        },
        handleClose(done) {
            done();
        },
        //数据编辑页面dialog打开
        editInfo: function(row){
            this.info = row;
            this.addFlag = false;
            this.dialogVisible = true;
        },
        //添加保存方法
        saveArticleInfo: function(){
            this.loading = true;
            var url = "/api/article/saveOrUpdate/";
            var params = qs.stringify({
                    articleId : this.info.articleId!=null?this.info.articleId:null,
                    articleTitle : this.info.articleTitle,
                    columnId : this.info.columnId,
                    articleAbstract : this.info.articleAbstract,
                    articleContent : this.info.articleContent
                })
            Vue.axios.post(url,params).then((response)=>{
                this.dialogVisible = false;
                this.info = {};
                if(response.data.state==1){
                    this.$message.success("保存成功");
                    this.initArticle();
                }else{
                    this.$message.error('保存失败!');
                }
            }).catch((error)=>{
                console.log("error!"+error);
            });
            this.loading=false;//关闭loading
        },
        //删除数据
        deleteInfo: function(row){
            this.$confirm('是否删除此条文章数据?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(()=>{// 向服务端请求删除
                this.loading = true;
                var url = "/api/article/delete/"+row.articleId; 
                Vue.axios.post(url).then((response)=>{
                    if(response.data.state==1){
                        this.$message.success("删除成功");
                        this.initArticle();
                    }else{
                        this.$message.error('删除失败!');
                    }
                    this.loading=false;//关闭loading
                })
            }).catch(() => {
                this.$message.info('已取消操作!');
            })
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