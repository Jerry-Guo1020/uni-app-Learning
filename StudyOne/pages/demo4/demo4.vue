<template>
	<!-- ref 、 reactive 的响应式 -->
	<!-- 概念的解析：
	ref： 适合定义所有的的数据类型的数据，包括基本类型，然后这个访问和修改的时候需要通过 （.value）
	reactive： 仅适用于对象类型（对象或者是数组，不支持基本类型） -->
	
	<view>{{num1}}</view>
	<view>{{num2}}</view>
</template>

<script setup>
	import {ref} from "vue";
	
	let num1 = 6
// 	setInterval(() => {
// 		num1++
		

// 	},1000)

	let num2 = ref(10);
	setInterval(() => {
		num2.value++
		console.log(num2.value)
	},1000)
	
</script>

<style>

</style>
