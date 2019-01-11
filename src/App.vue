<template>
  <div id="app">

    <el-header id="header">
        <img class="ico" src="./assets/logo.png">
    </el-header>

    <el-container class="my_main" id="my_main">

      <el-container>
        <el-aside class="my_left_container" id="my_left_container" width="400px">
          <div style="width: 100%;height: 100%;background: #f5f5f5"></div>
        </el-aside>
        <el-container class="my_container">
            <!--<el-button :plain="true" @click="open2">成功</el-button>-->
            <layout/>
        </el-container>
      </el-container>

    </el-container>
    <el-footer id="footer">

    </el-footer>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Layout from './components/Layout.vue'
var $ = require("jquery")


export default {
  name: 'app',
    data(){
      return{
          fullscreenLoading:false
      }
    },
  components: {
    'layout':Layout
  },
  methods:{
    open2(){
      this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
    }
  },
    mounted:function () {
        $("#my_main").height($(window).height() - $("#footer").height() - $("#header").height());
        window.onresize = function () {
            $("#my_main").height($(window).height() - $("#footer").height() - $("#header").height());
        }
    }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  .my_main{
    overflow: hidden;
  }
.ico{
  height: 100%;
}
.my_container{
  height: 800px;
  width: 100%;
}
.my_left_container{
  height: 100%;
  background: #f5f5f5;
}
.el-header{
  width: 100%;
  background: black;
  text-align: center;
}
.el-footer{
  position: fixed;
  bottom: 0px;
  width: 100%;
  background: black;
  text-align: center;
}
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}*/
</style>

<style>
  .el-aside{
    float: right;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
