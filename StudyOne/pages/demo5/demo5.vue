<template>
	<view>
			<!-- 1-1 导入的方法：使用在image标签用src直接输入完整路径 -->
			<!-- <image src="/static/1.jpg"></image> -->
			
			<!-- 2-1 导入的方法:使用v-bind 通过在js中实现同等效果了 -->
			<image v-bind:src="haha"></image>
			
			<!-- 2-1-2 可以省略掉 v-bind src前面要加入冒号即可，冒号的意思是执行命令 -->
			<image :src="haha"></image>
			
			<!-- 3-1 导入的方法:多张图片的情况下，使用数组实现同等效果，然后这个数组中写上你需要的照片的位置即可 -->
			<image v-bind:src="shuzu[4]"></image>
			
			<!-- 3-1-2 导入的方法:多张图片的情况下，使用数组实现同等效果，然后通过计时器来实现轮播图haa -->
			<image v-bind:src="shuzu[4]"></image>
			
	</view>
	
	<view class="box" :class="{active:false	}"> v-bind 的指令 </view>
	
	
	<view class="box" :class="true? 'active' : ''"> v-bind 的指令 </view>
</template>

<script setup>
	import {ref} from "vue";
	
	const IsActive = ref(false);
	
	const haha = ref("/static/2.jpg");
	const shuzu = ref([
		"/static/3.jpg",
		"/static/4.jpg",
		"/static/5.jpg",
		"/static/6.jpg",
		"/static/7.jpg"
	]);
	
	
	// 加入一个定时器让这个数组的照片发生变化:
	let i = 0;
	setInterval(() => {
		i++
		haha.value = shuzu.value[i % 4];
		IsActive.value = !IsActive.value;
	},1000)
</script>

<style lang="scss">
	.box {
		width: 200px;
		height: 200px;
		background-color: orange;
		font-size: 20px;
	}
	
	.active {
		background-color: green;
		color: white;
		
	}
</style>
