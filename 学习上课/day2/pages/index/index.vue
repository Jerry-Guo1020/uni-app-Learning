<template>
	<view class="content">
		<view class="box1">box1</view>
		<view class="box2" hover-class="box2_pro" hover-stay-time="500">box2</view>
		<view class="box3" hover-class="box3_pro" hover-stay-time="500">
			<view class="inner" hover-class="innerpro" hover-stay-time="300">内部元素</view>
		</view>
		
		<text>这个是学习text</text><br>
		<text selectable>oifjdskfsjakjj</text>
		
		<scroll-view class="scrollfun">
			<view class=""></view>
		</scroll-view>
	</view>
</template>

<script>

</script>

<style scoped>
	.box1 {
		width: 100%;
		height: 50rpx;
		background-color: red;
	}

	.box2 {
		width: 100%;
		height: 50rpx;
		background-color: green;
	}

	.box2_pro {
		background-color: orange;
	}

	.box3 {
		width: 100%;
		height: 50rpx;
		background-color: green;
	}

	.box3_pro {
		background-color: orange;
	}
	
	.inner {
		background: purple;
	}
	
	.innerpro {
		background-color: skyblue
	}
</style>