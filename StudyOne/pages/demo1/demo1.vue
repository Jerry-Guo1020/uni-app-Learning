<template>
	<view>
<!-- 	 indicator-dots的意思是：轮播图下面有指示点
		 indicator-color的意思是： 指示点的颜色
		 indicator-active-color的意思是： 选中的指示点的选中的颜色
		 circular 的意思是最后一页再划的话会回去第一页
		 autoplay 的意思是自动滑动
		 interval="1000" 的意思是 设置一个定时器自动滑动，按照毫秒来
		 -->
		<swiper indicator-dots indicator-active-color="orange" circular autoplay interval="1000">
			<swiper-item>1</swiper-item>
			<swiper-item>2</swiper-item>
			<swiper-item>3</swiper-item>
			<swiper-item>4</swiper-item>
			<swiper-item>5</swiper-item>
			<swiper-item>6</swiper-item>
			<swiper-item>7</swiper-item>
			<swiper-item>8</swiper-item>
			<swiper-item>9</swiper-item>
		</swiper>
	</view>
	
	<view>
		<image src="/static/1.jpg" class="pict1" mode="aspectFit"></image>
	</view>

</template>

<script>

</script>

<style lang="scss" scoped>
	
	swiper {
		//vw：视图的宽度 vh：屏幕的可视化区域
		width: 100vw;
		height: 200px;
		border: 1px solid pink;
		
		swiper-item{
			width: 100%;
			height: 100%;
			background: green;
		}
		// 这是设置这个边框的倍数的不同颜色，2的倍数设置为天蓝色，其他的就是母设置的
		swiper-item:nth-child(2n) {
			background-color: skyblue;
		}
	}
	
	.pict1 {
		width: 350px;
		height: 250px;
	}
</style>