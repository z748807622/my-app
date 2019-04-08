<template>
	<div class="layout-main">
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
	  Login
  }
}
</script>

<style>
.layout-main{
	width: 100%;
	text-align: center;
}
</style>
