<template>
<!-- 
ref ref是Vue原生参数，用来给组件注册引用信息。引用信息将会注册到父组件的$refs对象上，如果定义在普通的DOM元素上，那么$refs指向的就是DOM元素。
action action表示此上传组件对应的上传接口，此时我们使用的是后端Controller定义的接口
name name表示当前组件上传的文件字段名，需要和后端的上传接口字段名相同 。
list-type 文件列表的类型，主要是文件列表的样式定义。这里是卡片化。
:limit 最大允许上传的文件个数。
file-list 上传的文件列表，这个参数用于在这个上传组件中回显图片，包含两个参数：name、url如果你想在这个文件上传组件中咱叔图片，赋值对应的参数即可显示，比如更新数据时，其表单样式完全和添加表单是相同的。但是table中回显图片是完全不需要用这个方式的。
:on-exceed 上传文件超出个数时的钩子函数。
:before-upload 上传文件前的钩子函数，参数为上传的文件，返回false，就停止上传。
:on-preview 点击文件列表中已上传的文件时的钩子函数
:on-success 文件上传成功的钩子函数
:on-remove 文件列表移除时的钩子函数
:src 图片上传的URL。
-->
  <el-from-item label="图片">
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
      <el-button type="primary">浏览图片</el-button>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="图片预览">
    </el-dialog>

  </el-from-item>
 
   
</template>

<script>
import Vue from "vue";
export default {
  name: "CopName",
  data() {
    return {
      //文件上传的参数
      dialogImageUrl: '',
      dialogVisible: false,
      //图片列表（用于在上传组件中回显图片）
      fileList: [],
    };
  },
  methods: {
     //文件上传成功的钩子函数
    handleSuccess(res,file) {
        if(file.response.state == 1){
          this.$message({
            type: 'info',
            message: '图片上传成功',
            duration: 6000
          });
        }
    },
    //删除文件之前的钩子函数
    handleRemove(file, fileList) {
     
    },
    //点击列表中已上传的文件事的钩子函数
    handlePreview(file) { //可以在此写图片预览方法，查看大图
      this.dialogVisible=true;
     this.dialogImageUrl=file.response.data.url;
    },
    //上传的文件个数超出设定时触发的函数
    onExceed(files, fileList) {
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
  }
}
</script>