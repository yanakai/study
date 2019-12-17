<template>
    <div>
        <div>
            <el-row style="margin-top:10px;">
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
                <el-table-column prop="createName" label="创建者" align="center"></el-table-column>
                <el-table-column prop="lastModifyTime" label="最后修改时间" align="center"></el-table-column>
                <el-table-column  label="操作" align="center" width="200%">
                    <template slot-scope="scope">
                        <el-button size="mini" round icon="el-icon-edit" type="warning"  @click="editInfo(scope.row)">编辑</el-button>
                        <el-button size="mini" round icon="el-icon-delete" type="danger" @click="deleteInfo(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!--分页按钮开始-->
            <div class="block">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageNum"
                :page-sizes="[10, 20, 30, 40,50,100]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
                </el-pagination>
            </div>
            <el-dialog
                class="abow_dialog"
                :title="addFlag?'新增文章':'修改文章'"
                style="height:560px;text-align:left !important"
                :visible.sync="dialogVisible"
                :before-close="handleClose"
            >
                <el-form ref="info" label-width="100px">
                    <el-form-item label="标题：" >
                        <el-input v-model="info.articleTitle" placeholder="请输入文章标题"></el-input>
                    </el-form-item>
                    <el-form-item  :data="info.imgPath"></el-form-item>
                    <el-form-item  :data="info.imgName"></el-form-item>
                    <el-form-item label="选择图片：">
                        <el-upload 
                        ref="upload"
                        action="/api/common/upload"
                        name="file"
                        list-type="picture"
                        :limit="1"
                        :file-list="fileList"
                        :on-exceed="onExceed"
                        :before-upload="beforeUpload"
                        :on-preview="handlePreview"
                        :on-success="handleSuccess"
                        :on-remove="handleRemove"
                        >
                        <el-button type="primary">浏览图片<i class="el-icon-upload el-icon--right"></i></el-button>
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
            articleData: [],//文章列表数据
            loading: true, //是否加载loading
            total: 0,//列表总条数
            pageNum:1, //当前页码数
            pageSize:10,//每天显示条数
            addFlag: true, //添加和编辑页面的title区别
            dialogVisible: false,//添加或者编辑弹出框是否显示
            info: {}, //添加和编辑页面的对象
            columnList: [], //所属栏目下拉列表
            fileList: [],//图片列表（用于在上传组件中回显图片）
            imgPath: "",//图片路径
            imgName: "",//图片名称
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
        initArticle: function(){//文章列表初始化
            var url = "/api/article/list/";
           var params = qs.stringify({
               pageNum:this.pageNum,
               pageSize:this.pageSize
           })
            Vue.axios.post(url,params).then((response)=>{
                this.articleData = response.data.rows;//写入列表数据
                this.total = response.data.total; //写入总条数
                this.loading=false;//关闭loading
            }).catch((error)=>{
                console.log("error!"+error);
            });
        },
        handleSizeChange(val) { //选择每页显示条数
            this.pageSize=val;//设置每页显示的条数
             this.initArticle();;//刷新表格
        },
        handleCurrentChange(val) { //点击页数
            this.pageNum=val;//设置选中的页数
            this.initArticle();;//刷新表格
        },
        handleClose(done) {
            done();
        },
        editInfo: function(row){//数据编辑页面dialog打开
            this.info = row;
            this.addFlag = false;
            this.dialogVisible = true;
            this.fileList=[{name:row.imgName,url:row.imgPath}]
        },
        handleSuccess(res,file) { //文件上传成功的钩子函数
            if(file.response.state == 1){
                this.$message({
                    type: 'info',
                    message: '图片上传成功',
                    duration: 6000
                });
                this.imgName=file.response.data.fileName;
                this.imgPath=file.response.data.url;
            }
        },
        handleRemove(file, fileList) {//删除文件之前的钩子函数
        },
        //点击列表中已上传的文件事的钩子函数
        handlePreview(file) { //可以在此写图片预览方法，查看大图
        
        },
        onExceed(files, fileList) {//上传的文件个数超出设定时触发的函数
            this.$message({
                type: 'info',
                message: '最多只能上传一个图片,请删除之前上传的',
                duration: 6000
            });
        },
        //文件上传前的前的钩子函数
        //参数是上传的文件，若返回false，或返回Primary且被reject，则停止上传
        beforeUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isGIF = file.type === 'image/gif';
            const isPNG = file.type === 'image/png';
            const isBMP = file.type === 'image/bmp';
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG && !isGIF && !isPNG && !isBMP) {
                this.$message.error('上传图片必须是JPG/GIF/PNG/BMP 格式!');
            }else{
                if (!isLt2M) {
                    this.$message.error('上传图片大小不能超过 2MB!');
                }
            }
            return (isJPG || isBMP || isGIF || isPNG) && isLt2M;
        },
        //添加保存方法
        saveArticleInfo: function(){
            this.loading = true;
            var url = "/api/article/saveOrUpdate/";
            //拼装需要保存的字段
            var params = qs.stringify({
                    articleId : this.info.articleId!=null?this.info.articleId:null,
                    articleTitle : this.info.articleTitle,
                    columnId : this.info.columnId,
                    articleAbstract : this.info.articleAbstract,
                    articleContent : this.info.articleContent,
                    imgPath : this.imgPath,
                    imgName : this.imgName 
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
            return 'background-color:pink;color:#fff;font-size:2px;'
        },
        //设置表头行的样式
        tableHeaderColor({row,column,rowIndex,columnIndex}){
            return 'background-color:lightblue;color:#fff;font-wight:500;font-size:6x;'
        }
    }
}
</script>