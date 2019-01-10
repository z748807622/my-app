<template>
	<div class="layout-main">
		<myvideo/>
	</div>
</template>

<script>
    import Login from './Login.vue'
    import myvideo from './video.vue'

export default {
  name: 'Layout',
  components: {
      myvideo
  }
}
</script>

<style>
.layout-main{
	width: 100%;
	text-align: center;
}
</style>
