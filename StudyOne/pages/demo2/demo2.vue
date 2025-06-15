<template>
	<view>
		hello this is demo two!
	</view>
	<button @click="home" class="btn1">点击</button>
	<view class="box">
		jafkslfjsfsfsajgw
	</view>
</template>

<script setup>
	
	const home = () => {
		// console.log('123')
		location.href = '/'
	}
	
	
</script>

<style>
.btn1 {
	width: 150px;
	height: 45px;
}
</style>
