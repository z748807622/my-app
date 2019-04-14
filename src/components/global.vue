<template>

</template>
<script>

    import axios from 'axios'

    let nickName='',token='',isLogin=false,msgSocket=null,ip = '192.168.1.102';
    export default {
        nickName,
        token,
        isLogin,
        msgSocket,
        ip,
        easyPost
    }
    function easyPost(url,data,success,error) {//"Content-type":"application/json;charset=utf-8"
        axios.post(url,data,{headers:{"Content-type":"application/json"}}).then(success).catch(error)
    }
</script>