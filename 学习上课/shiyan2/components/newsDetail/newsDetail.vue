<template>
	<view>
		这个是第{{ newId }}个的页面详情
	</view>
</template>

<script>
	import { ref, onMounted } from 'vue'

	export default {
		setup() {
			const newId = ref(null);
			onMounted(() => {
				let id = uni.getStorageSync('id');
				newId.value = id;
			});

			return {
				newId
			};
		}
	}
</script>

<style>

</style>