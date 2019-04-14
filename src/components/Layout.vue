<template>
	<div class="layout-main">
		<div style="position: fixed;left: 0px;" v-show="global.isLogin">
			<el-aside class="my_left_container" id="my_left_container" width="372px">
				<Msg/>
			</el-aside>
		</div>
		<div v-if="global.isLogin">
			<myvideo/>
		</div>
		<div v-if="!global.isLogin">
			<Login/>
		</div>
	</div>
</template>

<script>
    import Login from './Login.vue'
    import myvideo from './video.vue'
	import Msg from './OnlineChat.vue'

	/*const tLogin = Login,tVideo = myvideo;
    const routes = [
		{path:'/login',component:tLogin},
		{path:'/video',component:tVideo}
	];
    const route = new VueRouter({
		routes
	})*/

	console.log('aaa',global)

export default {
		data(){
			return {
				global:this.GLOBAL
			}
		},
  name: 'Layout',
  components: {
      myvideo,
	  Login,
	  Msg
  }
}
</script>

<style>
.layout-main{
	width: 100%;
	text-align: center;
}
</style>
