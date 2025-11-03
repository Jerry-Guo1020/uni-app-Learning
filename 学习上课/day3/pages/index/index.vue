<template>
	<view class="content">
		<image class="img" src="/static/logo.png" mode="aspectFill"></image>
		<swiper indicator-dots indicator-color="#4cd964" indicator-active-color="#007aff" circular autoplay interval="2000" class="swiper">
			<swiper-item><image src="/static/logo.png"></image></swiper-item>
			<swiper-item><image src="/static/logo.png"></image></swiper-item>
			<swiper-item><image src="/static/logo.png"></image></swiper-item>
			<swiper-item><image src="/static/logo.png"></image></swiper-item>
			<swiper-item><image src="/static/logo.png"></image></swiper-item>
			<swiper-item><image src="/static/logo.png"></image></swiper-item>
			<swiper-item><image src="/static/logo.png"></image></swiper-item>
		</swiper>
		
		<navigator url="/pages/index2/index2" open-type="reLaunch">fafhkfjajfkjf</navigator>
		<button @click="switchTab(1)">这个是一个跳转按钮</button>
		
		<button size="default" type="primary" plain disabled loading>flekhgt46k</button>
	</view>
</template>

<script setup>
	function switchTab(idx) {
		if (idx === 1) {
			uni.navigateTo({url:"/pages/index2/index2"})
		} else {
			uni.navigateTo({url:"/pages/index2/index2"})
		}
	}
</script>

<style scoped>
.swiper {
	width: 500rpx;
	height: 500rpx;	
}

swiper-item {
	width: 100%;
	height: 100%;
}

.swiper image {
	width: 100%;
	height: 100%;
}
</style>
