<template>

    <div class="login iconfont">
        <el-row>
            <el-col :span="10" :offset="7">
                <el-input
                    placeholder="用户名"
                    prefix-icon="icon-username"
                    v-model="loginName"
                    ></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10" :offset="7">
                <el-input type="password"
                        placeholder="密码"
                        prefix-icon="icon-password"
                        v-model="passwd"
                ></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-button class="iconfont" type="primary" @click="login" icon="icon-login">
                    登录
                </el-button>
                <el-button class="iconfont" plain icon="icon-icon-regist">
                    去注册
                </el-button>
            </el-col>
        </el-row>
    </div>

</template>

<script>
    //import {Col} from 'element-ui'
    export default {
        name:"Login",
        data(){
            return{
                loading:null,
                loginName:'',
                passwd:'',
            }
        },
        created:function () {
            this.loading = this.$loading({
                lock:true
            })
        },
        mounted:function () {
            this.loading.close();
        },
        methods:{
            login(){
                console.log(this.loginName,this.passwd)
                var loginMsg = {
                    loginName:this.loginName,
                    passwd:this.passwd,
                    code:10000
                }
                let that = this;
                this.GLOBAL.easyPost("http://"+this.GLOBAL.ip+":8033/login",JSON.stringify(loginMsg),function (res) {
                    console.log("登陆信息返回",res)
                    if (res && res.data && res.data.code == 0){
                        that.$message({message:res.data.nickMame+'登陆成功',type:'success'});
                        that.GLOBAL.nickName = res.data.nickName
                        that.GLOBAL.token = res.data.data
                        console.log(loginMsg)
                        that.GLOBAL.msgSocket.send(JSON.stringify({token:that.GLOBAL.token,nick:that.GLOBAL.nickName,code:10000}));
                    }else {
                        that.$message.error('登陆失败' + res.data.msg);
                    }
                },function (err) {
                    console.log("err",err)
                    that.$message.error('登陆失败;' + err);
                })
                /*this.GLOBAL.nickName = this.nickName
                console.log(loginMsg)
                this.GLOBAL.msgSocket.send(JSON.stringify(loginMsg));*/
            }
        }
    }

</script>

<style>
    @import "../assets/icon/iconfont.css";

    .login{
        margin: 10px 0;
    }

    .login .el-row{
        padding-top: 26px;
    }
</style>

