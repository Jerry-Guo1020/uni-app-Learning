<template>
	<view>
		<view class="box" :class="{active:true}">111</view>
		<view class="box" :class="active">222</view>
		<view class="box" :class="{active:isActive}">333</view>
		<view class="box" :class="{active:isActive?'active':''}">444</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const size = ref(30)
const isActive = ref(false)
setInterval(() => {
	isActive.value = !isActive.value
	size.value += 1
},2000)
</script>

<style scoped>
.box {
	width: 200px;
	height: 200px;
	background-color: orange;
	font-size:
}	
	
	
</style>
