<template>
	<view>
		<view class="" v-for="(item, index) in 10">
			我是第{{index + 1}}个盒子
		</view>
		
		<view class="" v-for="item in nba">
			gftgg{{item.name}}
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';


/* 这里可以做一个笔记就是：括号是调用函数，方括号是列表， 花括号是对象 */
const nba = ref([
	{name:"jdrgjr", team:"11"},
	{name:"jdrgjr2", team:"22"},
	{name:"jdrgjr3", team:"33"},
	{name:"jdrgjr4", team:"44"},
	{name:"jdrgjr5", team:"55"},
	{name:"jdrgjr6", team:"66"}
])
</script>

<style scoped>

</style>