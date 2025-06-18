<template>
	<view class="box" @click="btn" :style="{background:color}">
		{{num}}
	</view>
	
	<switch checked @change="onchange" />
	
	<button>点击事件</button>
</template>

<script setup>
	import {ref} from "vue";
	
	const color = ref('#0001')
	const num = ref(1);
	function btn() {
		num.value++;
	}
	
	function onchange(e) {
	// 	console.log(e)
	console.log(e.detail.value)
	}
</script>

<style lang="scss">
.box {
	width: 200px;
	height: 150px;
	background-color: pink;
}

</style>
