<template>
  <div id="app">
    <el-container class="my_main">
      
      <el-header>
        <div style="width: 100%;height: 100%;background: black">
          <img class="ico" src="./assets/logo.png">
        </div>
      </el-header>

      <el-container>
        <el-aside>
          <div style="width: 100%;height: 100%;background: #f5f5f5"></div>
        </el-aside>
        <el-main>
          <div style="width: 100%;text-align: center;background: gray">
            <el-button :plain="true" @click="open2">成功</el-button>
            <layout/>
          </div>
        </el-main>
      </el-container>

      <el-footer>
        <div style="width: 100%;height: 100%;background: red"></div>
      </el-footer>

    </el-container>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Layout from './components/Layout.vue'

export default {
  name: 'app',
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
  }
}
</script>

<style>
  .my_main{

  }
.ico{
  height: 100%;
}
.el-footer{
  position: fixed;
  bottom: 0px;
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
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
