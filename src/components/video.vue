<template>
    <div @click="play">
        <canvas id="my_video"></canvas>
    </div>
</template>

<script>
    import JSMpeg from 'jsmpeg-player';
    export default {
        data(){
            return{
                url:"ws://192.168.11.187:8888/ws",
                volume:50,
                flag:true,
                player:null,
                config:{
                    canvas: document.getElementById("my_video"),
                    autoplay: true,
                    audio: true,
                    videoBufferSize:1024*1024*10,
                    audioBufferSize:1024*1024*10,
                    protocols: 'zjy',
                }
            }
        },
        methods:{
            play(){
                if(this.flag){
                    alert("开始播放")
                    //console.log(JSMpeg)
                    window.jj = JSMpeg;
                    this.player = new JSMpeg.Player(this.url, this.config);
                }
                this.flag = false;
            }
        }
    }

</script>
