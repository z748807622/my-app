<template>

    <div class="login iconfont">
        <el-row>
            <el-col :span="10" :offset="7">
                <el-input
                    placeholder="用户名"
                    prefix-icon="icon-username"
                    ></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10" :offset="7">
                <el-input type="password"
                        placeholder="密码"
                        prefix-icon="icon-password"
                ></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-button type="primary" icon="icon-login">
                    登录
                </el-button>
                <el-button plain icon="icon-icon-regist">
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
                loading:null
            }
        },
        created:function () {
            this.loading = this.$loading({
                lock:true
            })
        },
        mounted:function () {
            this.loading.close();
        }
    }

</script>

<style>
    @import "../assets/icon/iconfont.css";

    .login{
        margin: 10px 0;
    }
</style>

