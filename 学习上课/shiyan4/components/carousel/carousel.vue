<template>
  <view class="banner-container">
	<swiper class="banner-swiper":autoplay="true" :interval="3000" :duration="500" :circular="true" :indicator-dots="true">
		<swiper-item v-for="(banner, index) in banners" :key="index">
			<view class="banner-item">
				<image class="banner-image" :src="banner.imageUrl" :alt="banner.title" />
			</view>
			<view class="banner-text">
				<text class="banner-title">{{banner.title}}</text>
				<text class="banner-desc" v-if="banner.description">{{banner.description}}</text>
			</view>
		</swiper-item>
	</swiper>
  </view>
</template>

<script setup>
import { ref } from 'vue';

import banner_one from "@/static/logo.png"
//引入照片

const banners = ref([
	{
		id: 1,
		imageUrl: banner_one,
		title: "第一张图",
		description:"这个是第一张图"
	},
	{
		id: 2,
		imageUrl: banner_one,
		title: "第二张图",
		description:"这个是第二张图"
	},
	{
		id: 3,
		imageUrl: banner_one,
		title: "第三张图",
		description:"这个是第三张图"
	},
	{
		id: 4,
		imageUrl: banner_one,
		title: "第四张图",
		description:"这个是第四张图"
	},
])
</script>

<style scoped>
.banner-container {
	width: 95%;
	margin: 8rpx auto 18rpx auto;
	overflow: hidden;
	box-shadow: 0 6rpx 26rpx #ffefcc;
	background-color: #fff;
	border-radius: 8rpx;
}

.banner-swiper {
	height: 340rpx;
}

.banner-item {
	position: relative;
	width: 100%;
	height: 100%;
}

.banner-image {
	width: 100px;
	height: 100px;
	display: block;
	border-radius: 28rpx;
}

.banner-text {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	color: white;
	padding: 10rpx;
	box-sizing: border-box;
	border-radius: 0 0 8rpx 8rpx;
}

.banner-title {
	font-size: 16rpx;
	font-weight: bold;
	display: block;
}

.banner-desc {
  font-size: 14px;
  display: block; 
}
</style>
