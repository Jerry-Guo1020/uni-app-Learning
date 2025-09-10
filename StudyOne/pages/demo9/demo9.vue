<template>
	<view class="out">
		<view class="item" v-for="(item, index) in goods" :key=item.id>
			<checkbox />
			<text class="title">{{item.name}}</text>
			<text class="del" @click="remove(index)">删除</text>
		</view>
	</view>
</template>

<script setup>
	import {ref} from "vue";
	
	const goods =ref([
		{id:1, name:"小米"},
		{id:2, name:"vivo"},
		{id:3, name:"oppo"},
		{id:4, name:"华为"},
		{id:5, name:"魅族"},
	])
	
	function remove(index) {
		// console.log(e)
		goods.value.splice(index, 1)
	}
</script>

<style lang="scss" scoped>
	.out {
		padding: 10px;
		
		.item {
			padding: 10px 0;
			
			.del {
				color: red;
				margin-left: 5px;
			}
		}
	}
</style>
