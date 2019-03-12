<template>
    <div class="left_div">
        <div class="display_msg">
            <div style="height: 30px;">
                <span style="float: left">nick:{{myNickName}}</span>
                <span style="float: right">在线人数:{{onlineNum}}</span>
            </div>
            <span v-for="todo in lists">
                <el-card shadow="hover">
                    {{todo.user}}:{{todo.msg}}
                </el-card>
            </span>
        </div>
        <div class="sendMsg">
            <el-input
                    class="msg_input"
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-on:keyup.enter.native="sendMsg"
                    v-model="textarea">
            </el-input>
            <el-input v-if="!isLogin" v-model="nickName" placeholder="输入nickName" v-on:keyup.enter.native.stop="login"></el-input>
        </div>
    </div>
</template>

<script>
    var $ = require("jquery")
    export default {
        data(){
            return{
                textarea: '',
                nickName:'',
                isLogin:false,
                websocket:null,
                myNickName:'',
                onlineNum:0,
                pingTimer:null,
                lists:[]
            }
        },
        created(){
            this.initWebSocket()
        },
        mounted() {

        },
        destroyed(){
            this.websocket.close();
        },
        methods:{
            initWebSocket(){
                const wsuri = "ws://localhost:9999/ws"
                this.websocket = new WebSocket(wsuri);
                this.websocket.onopen = this.wsOpen();
                this.websocket.onerror = this.wsError;
                this.websocket.onmessage = this.wsMessage;
                this.websocket.onClose = function () {
                    //console.log("聊天室关闭");
                    this.$message({message:'聊天室关闭',type:'warn'});
                }
            },
            wsOpen(){
                this.$message({message:'聊天室连接成功',type:'success'});
                //console.log("聊天室连接成功");
            },
            wsError(e){
                console.log("聊天室错误:",e);
                this.$message.error('聊天室错误');
                clearInterval(this.pingTimer);//清除心跳
                this.isLogin = false;
            },
            wsMessage(e){
                console.log("聊天室接收消息：",e.data)
                var data = JSON.parse(e.data);

                if(data.extend && data.extend.code == 20001){//接收在线人数信息
                    this.onlineNum = data.extend.mess;
                }

                if(data.extend && data.extend.code == 20002 && data.extend.mess){//认证登陆
                    this.myNickName = this.nickName;
                    this.$message({message:'nick登陆成功',type:'success'});
                    this.isLogin = true;

                    this.pingTimer = setInterval(()=>{//浏览器链接心跳
                        this.ping();
                    },10000);

                }else if (data.extend && data.extend.code == 20002 && !data.extend.mess) {
                    this.$message.error('nick登陆失败');
                }

                if (data.body){
                    var dd = {
                        msg:data.body,
                        user:data.extend.nick
                    }
                    this.lists.push(dd);
                }
            },
            login(){
                var loginMse = {
                    nick:this.nickName,
                    code:10000
                }
                console.log("nickName",loginMse)
                this.websocket.send(JSON.stringify(loginMse));
            },
            sendMsg(){
                console.log("发送消息:",this.textarea)
                var sendMsg = {
                    code:10086,
                    mess:this.textarea
                }
                this.websocket.send(JSON.stringify(sendMsg));
                this.textarea = "";
            },
            ping(){//发送ping
                var pingMsg = {
                    code:10015
                }
                this.websocket.send(JSON.stringify(pingMsg));
            }
        }
    }

</script>

<style>
    @import "../assets/icon/iconfont.css";
    .left_div{
        height: 100%;
        width: 100%;
        background: #f5f5f5;
        position: relative;
    }

    .display_msg{
        height: 85%;
        //background: #55a532;
        padding: 5px 10px;
    }

    .sendMsg .msg_input{
        width: 100%;
        margin-bottom: 2px;
    }

    .sendMsg .el-button{
        float: right;
    }

    .sendMsg{
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 15%;
    }
    .el-textarea textarea{
        resize: none;
    }
    .icon-send{
        padding: 0 6px;
    }
</style>