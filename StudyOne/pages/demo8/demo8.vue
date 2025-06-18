<template>
	<!-- 列表渲染 -->
	<view class="out">
		<view class="box" v-for="(item, index) in 10">box磨块--{{index + 1}}</view>
	</view>
</template>

<script setup>
	import {ref} from "vue";
	

</script>

<style lang="scss" scoped>
	       
</style>
