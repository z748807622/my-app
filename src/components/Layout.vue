<template>
	<div class="layout-main">
		<div style="position: absolute;left: 0px;" v-show="global.isLogin">
			<el-aside class="my_left_container" id="my_left_container" width="372px">
				<Msg/>
			</el-aside>
		</div>
		<div v-if="global.isLogin" key="1">
			<myvideo/>
		</div>
		<div v-if="!global.isLogin" key="2">
			<Login/>
		</div>
		<div style="position: absolute;right: 0px;height: 100%;top: 0px;" v-if="global.isLogin"  key="3">
			<div style="height: 60px; z-index: 0"></div>
			<el-aside class="my_left_container" id="my_left_container" width="372px">
				<admin />
			</el-aside>
		</div>
		<div ref="videoList" style="width: 1036px;text-align:left; border: 1px solid red;height: 150px;position: absolute;bottom: 40px;left: 50%;margin: 0 0 0 -518px;overflow-y: auto;">
			<ul>
				<li v-for="item in liveList" key="item">
					{{item}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
    import Login from './Login.vue'
    import myvideo from './video.vue'
	import Msg from './OnlineChat.vue'
	import admin from './uploadVideo'

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
			global:this.GLOBAL,
			liveList: []
		}
	},
  name: 'Layout',
  components: {
	myvideo,
	Login,
	Msg,
	admin
  },
	methods: {

	},
	mounted() {
			let that = this
			this.bus.$on('getLiveVideo', function (val) {
				let jj = eval("(" + val +")")
				if (that.liveList.length > 20){
					that.liveList.length = 0
				}
				that.liveList.push(jj.mess)
				console.log('that.$refs.videoList', that.$refs.videoList, that.$refs.videoList.scrollTop, that.$refs.videoList.scrollHight)
				setTimeout(() => {
					that.$refs.videoList.scrollTop = that.$refs.videoList.scrollHeight
				},500)
			})
	}
}
</script>

<style>
.layout-main{
	width: 100%;
	text-align: center;
}
</style>
