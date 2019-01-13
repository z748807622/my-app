<template>
    <div class="left_div">
        <div class="display_msg"></div>
        <div class="sendMsg">
            <el-input
                    class="msg_input"
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="textarea">
            </el-input>
            <el-button type="primary" class="iconfont" icon="icon-send">发送</el-button>
        </div>
    </div>
</template>

<script>
    var $ = require("jquery")
    export default {
        data(){
            return{
                textarea: '',
                msgUrl: ''
            }
        },
        mounted() {
            /*console.log("lll",$('.left_div').height(),$('.sendMsg').height(),$(".display_msg").height())
            $(".display_msg").css('height',$('.left_div').height() - $('.sendMsg').height() + 'px')
            $(window).resize(function () {
                console.log("lll",$('.left_div').height(),$('.sendMsg').height(),$(".display_msg").height())
                $(".display_msg").css('height',$('.left_div').height() - $('.sendMsg').height() + 'px')
            })*/
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
        background: #55a532;
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