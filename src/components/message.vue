<template>
	


</template>

<script>
	
	import Message from 'element-ui'
	Vue.use(Message)

	export default{
		name: 'Message',
		data(){
			return{
				showClose: false,//是否显示关闭按钮
		        msg: '',//要显示的消息
		        type: '',//类型：默认为提醒，success，warning，error
		        center: false,//文字居中
		        dangerouslyUseHTMLString: false,//使用html片段
			}
		}
	}

</script>