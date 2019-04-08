<template>

    <div class="login iconfont">
        <el-row>
            <el-col :span="10" :offset="7">
                <el-input
                    placeholder="用户名"
                    prefix-icon="icon-username"
                    v-model="nickName"
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
                nickName:'',
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
                console.log(this.nickName,this.passwd)
                var loginMsg = {
                    nick:this.nickName,
                    passwd:this.passwd,
                    code:10000
                }
                this.GLOBAL.nickName = this.nickName
                console.log(loginMsg)
                this.GLOBAL.msgSocket.send(JSON.stringify(loginMsg));
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

