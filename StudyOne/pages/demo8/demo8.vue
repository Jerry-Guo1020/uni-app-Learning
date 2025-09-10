<template>
	<!-- 列表渲染 -->
	
	<!-- 注意事项：
	 在微信小程序当中，使用了v-for语句的时候，后面要加入这个 —— :key="" 东西；
	 原因：要加入wx的key -->
	 
	 
	<view class="out">
		<view class="box" v-for="(item, index) in 10" :key="index">box磨块--{{index + 1}}</view>
	</view>
	
	<view v-for="item in haha" :key="item.id">
		{{item.name}}
	</view>
</template>

<script setup>
	import {ref} from "vue";
	
	const haha = ref([
		{id:1, name:111, title:"aaa"},
		{id:2, name:222, title:"bbb"},
		{id:3, name:333, title:"ccc"},
		{id:4, name:444, title:"ddd"},
		{id:5, name:555, title:"eee"},
	])
</script>

<style lang="scss" scoped>
	       
</style>
