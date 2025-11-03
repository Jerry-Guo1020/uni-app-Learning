<template>
	<view>
		<h1>hkjshfkfjsklfjskl</h1>
	</view>
</template>

<script>
	export default {
		onLaunch: function() {
			console.log("appfsf")
			uni.setTabBarItem({
				index: 1,
				text: "自定义"
			})
			//角标
			uni.setTabBarBadge({
				index: 1,
				text: 999
			})
			//角标红点
			uni.showTabBarRedDot({
				index: 2
			})
		},
		onShow: function() {
			console.log("app Show")
		},
		onHide: function() {
			console.log("app hide")
		}
	}
</script>

<style scoped>

</style>