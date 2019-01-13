<template>
  <div id="app">

    <el-header class="header" id="header">
        <img class="ico" src="./assets/logo.png">
    </el-header>

    <el-container class="my_main" id="my_main">

      <el-container>
        <el-aside class="my_left_container" id="my_left_container" width="400px">
            <Msg/>
        </el-aside>
        <el-container class="my_container">
            <!--<el-button :plain="true" @click="open2">成功</el-button>-->
            <layout/>
        </el-container>
      </el-container>

    </el-container>
    <!--<el-footer class="footer" id="footer">

    </el-footer>-->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Layout from './components/Layout.vue'
import Msg from './components/OnlineChat.vue'
var $ = require("jquery")


export default {
  name: 'app',
    data(){
      return{
          fullscreenLoading:false
      }
    },
  components: {
    'layout':Layout,
    'Msg':Msg
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
        $("#my_main").height($(window).height() - $("#header").height());
        window.onresize = function () {
            $("#my_main").height($(window).height() - $("#header").height());
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
.header{
  height: 50px;
  width: 100%;
  background: black;
  text-align: center;
}
.footer{
  height: 50px;
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

