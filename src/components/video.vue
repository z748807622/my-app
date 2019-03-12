<template>
    <div @click="play" class="video_div">
        <canvas id="my_video" width="1037" height="576"></canvas>
        <canvas id="cover" width="1037" height="576"></canvas>
    </div>
</template>

<script>
    var JSMpeg = require('@lixuc/jsmpeg');
    var $ = require("jquery")
    export default {
        data(){
            return{
                url:"ws://192.168.0.104:8888/ws",
                volume:50,
                flag:true,
                player:null,
                canvas: 'my_video',
                config:{
                    canvas: null,
                    video:true,
                    audio: true,
                    videoBufferSize:1024*1024*100,
                    audioBufferSize:1024*1024*100,
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
                    //document.getElementById(this.canvas).display = "block";
                    $('#'+this.canvas).css('display','');
                    $('#cover').css('display','none');
                    window.jj = JSMpeg;
                    this.config.canvas = document.getElementById(this.canvas);
                    this.player = new JSMpeg.Player(this.url,this.config);
                }
                this.flag = false;
            }
        },
        mounted:function () {
            $('#'+this.canvas).css('display','none');
            var c=document.getElementById('cover');
            var cxt=c.getContext("2d");
            var grd=cxt.createLinearGradient(170,0,175,100);
            grd.addColorStop(0,"#000000");
            grd.addColorStop(1,"gray");
            cxt.fillStyle=grd;
            cxt.fillRect(0,0,1037,576);
        }
    }

</script>

<style>
    .video_div{
        cursor: pointer;
    }
    #my_video, #cover{
        position: relative;
        top: 2px;
    }
</style>
