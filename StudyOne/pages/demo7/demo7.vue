<template>
	<view class="box">
		<!-- 正常显示 -->
		<view>京东</view>
		
		<!-- 使用了v-if的条件渲染 -->
		
		<!-- 1、基本的展示 -->
		<view v-if="false">京东</view>
		<view v-else>淘宝</view>
		
		<!-- 2、使用ref 通过js 来实现同等效果 -->
		<view v-if="shop">京东</view>
		
			<!-- 3、使用v-if来展示图片 -->
			<view v-if="true">
				<image src="/static/1.jpg"></image>
			</view>
			
			<!-- 4使用v-show来展示图片 -->
			<view v-show="true">
				<image src="/static/1.jpg"></image>
			</view>
			
	</view>
</template>

<script setup>
	import {ref} from "vue";
	
	const shop = ref(false);
</script>

<style lang="scss" scoped>
	       
</style> 
