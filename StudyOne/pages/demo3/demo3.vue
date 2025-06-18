<template>
	<!-- 模版语法差值表达式用法 -->
	<view>
		3
	</view>
	
	<view> {{ 2+3 }}</view>
	<view> {{ a+5 }}</view>
	<view> {{ fn() }}</view>
	<view> {{ Math.random() }}</view>
	<view> {{ Date.now() }}</view>
</template>

<script setup>
	const a = 5;
	
	function fn() {
		return "就发凯瑟琳集卡时间";
		console.log("fjsikjfrlifkjhnasde")
	}
	
	
	
</script>

<style>

</style>
