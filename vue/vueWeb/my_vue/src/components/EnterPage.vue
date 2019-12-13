<template>
 <div class="CopClass">
   <h4>{{msg}}</h4>
   <el-button type="primary" @click="login">查询文章</el-button>
    <el-table :data = 'article_data' border justify="center" style="width:100%">
      <el-table-column prop="articleTitle" label="文章标题"></el-table-column>
      <el-table-column prop="articleAbstract" label="文章摘要"></el-table-column>
      <el-table-column prop="releaseTime" label="发布时间"></el-table-column>
      <el-table-column prop="releaseName" label="发布人"></el-table-column>
    </el-table>
 </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'CopName',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      checked: true,
      article_data:[]
    }
  },
  methods: {
    login: function(){
      var url ="/api/web/article/getList/";
      Vue.axios.get(url).then((response)=>{
        this.article_data = response.data.rows;
        console.log("response: "+response.data.rows);
      }).catch((error)=>{
        console.log("error!"+error);
      });
    }
  },  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
