<template>
	  <view class="content">
		  <view class="box1">盒子一的文件</view>
		  <view>----------------</view>
		  
		  <button @click="demo1">demo1</button>
	  </view>
	  
	  <text selectable space="emsp">text           的文本标签</text>
	  
	  	<view>scroll子元素</view>
	  <scroll-view scroll-x="true" scroll-y class="scrollView">
	  	<view class="box">scroll子元素 scroll子元素 scroll子元素 scroll子元素scroll子元素scroll子元素scroll子元素</view>
	  	<view class="box">scroll子元素</view>
	  	<view class="box">scroll子元素</view>
	  	<view class="box">scroll子元素</view>
	  	<view class="box">scroll子元素</view>
	  	<view class="box">scroll子元素</view>
	  	<view class="box">scroll子元素</view>
	  	<view class="box">scroll子元素</view>
	  	<view class="box">scroll子元素</view>
	  	<view class="box">scroll子元素</view>
	  	<view class="box">scroll子元素</view>
	  	<view class="box">scroll子元素</view>
	  	<view class="box">scroll子元素</view>
	  	<view class="box">scroll子元素</view>
	  	<view class="box">scroll子元素</view>
	  	<view class="box">scroll子元素</view>
	  	<view class="box">scroll子元素</view>
	  	<view class="box">scroll子元素</view>
	  	<view class="box">scroll子元素</view>
	  	<view class="box">scroll子元素</view>
	  	<view class="box">scroll子元素</view>
	  	<view class="box">scroll子元素</view>
	  </scroll-view>
	
</template>
 
<script setup>
	const demo1 = () => {
		uni.navigateTo({
			url: '/pages/demo1/demo1'
		});
		console.log('fojfsl')
	}
	
	const demo2 = () => {
		uni.navigateTo({
			url: '/pages/demo2/demo2'
		});
	}
</script>

<style lang="scss">
	.scrollView {
		width: 80%;
		height: 220px;
		border: 2px solid red;
		white-space: nowrap;
		
		.box {
			width: 100px;
			height: 100px;
			background-color: green;
			display: inline-block;
			border: 1px solid white;
		}
	}
	
</style>