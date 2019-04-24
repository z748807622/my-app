<template>

</template>
<script>

    import axios from 'axios'

    let nickName='',token='',isLogin=false,msgSocket=null,ip = '192.168.1.100',isAdmin = false;
    export default {
        nickName,
        token,
        isLogin,
        msgSocket,
        ip,
        easyPost,
        axios,
        httpServe: "http://"+ip + ":8033",
        isAdmin
    }
    function easyPost(url,data,success,error) {// "Content-type":"application/json;charset=utf-8"
        axios.post(url,data,{headers:{"Content-type":"application/json"}}).then(success).catch(error)
    }
</script>