<template>
    <div @click="play">
        <canvas id="my_video"></canvas>
    </div>
</template>

<script>
    var JSMpeg = require('@lixuc/jsmpeg');
    var $ = require("jquery")
    export default {
        data(){
            return{
                url:"ws://192.168.11.187:8888/ws",
                volume:50,
                flag:true,
                player:null,
                canvas: 'my_video',
                config:{
                    canvas: null,
                    video:true,
                    audio: true,
                    videoBufferSize:1024*1024*10,
                    audioBufferSize:1024*1024*10,
                    protocols:"",
                    //disableGl:true
                }
            }
        },
        methods:{
            play(){
                if(this.flag){
                    alert("开始播放")
                    //console.log(JSMpeg)
                    window.jj = JSMpeg;
                    this.config.canvas = document.getElementById(this.canvas);
                    this.player = new JSMpeg.Player(this.url,this.config);
                }
                this.flag = false;
            }
        },
        mounted:function () {
            var w_width = $(window).width();
            var l_width = $("#my_left_container").width();
            var v_width = $("#my_video").width()/2;
            console.log(w_width,l_width,v_width);
            //$("#my_video").css('left','-'+((w_width - l_width - v_width)/2) + 'px');
            $(window).resize(function () {
                w_width = $(window).width();
                l_width = $("#my_left_container").width();
                v_width = $("#my_video").width()/2;
                console.log(w_width,l_width,v_width);
                //$("#my_video").css('left','-'+((w_width - l_width - v_width)/2) + 'px');
            });
        }
    }

</script>

<style>
    #my_video{
        //transform: scale(0.5);
        position: relative;
        top:28px;
    }
</style>
