<template>
  <view class="container">
    <view class="content" v-for="(item, idx) in newsContent" :key="item.id">
      <view class="title">{{ item.title }}</view>
      <image
        v-if="item.photo"
        class="photo"
        :src="item.photo"
        mode="aspectFit"
		@tap="tohahaha(item)"
      />
      <view class="desc">{{ item.desc }}</view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

import personCenter from '@/static/image/个人中心.png';


const newsContent = ref([
  {
    id: 1,
    title: '第一个新闻',
    photo: personCenter, 
    desc: '这个是第一个新闻的内容',
  },
  {
    id: 2,
    title: '第二个新闻',
	photo: personCenter, 
    desc: '这个是第二个新闻的内容',
  },
  {
    id: 3,
    title: '第三个新闻',
    photo: personCenter, 
    desc: '这个是第三个新闻的内容',
  },
  {
    id: 4,
    title: '第四个新闻',
    photo: personCenter, 
    desc: '这个是第四个新闻的内容',
  },
]);


function tohahaha(item) {
	uni.setStorageSync('id', item.id)
	uni.navigateTo({
		url:'/pages/newsDetail/newsDetail'
	})
}
</script>

<style scoped>
.container {

  height: 100%;
  background-color: #fff;
  border-radius: 12rpx;
  margin: 25rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content {
  width: 100%;
  background-color: #fff;
  border: 1rpx solid black;
  border-radius: 12rpx;
  margin-top: 25rpx;
  padding: 10rpx; 
  display: flex;
  flex-direction: column;
}

.title {
  font-weight: bolder;
  color: black;
  margin-bottom: 5rpx;
}

.photo {
  width: 80%;      
  max-height: 300rpx; 
  margin: 0 auto;     
  border-radius: 8rpx;
}

.desc {
  font-size: 24rpx;  
  color: black;
  margin-top: 5rpx; 
}
</style>
