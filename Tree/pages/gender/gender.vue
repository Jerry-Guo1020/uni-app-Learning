<template>
  <view class="container">
    <view class="header">
      <image class="logo" src="/static/tree-logo.png" alt="树洞logo"></image>
      <view class="hello">Hello!</view>
      <view class="desc">欢迎来到大学生心灵树洞</view>
    </view>
    <view class="card">
      <view class="title">请选择你的性别</view>
      <view class="gender-options">
        <view class="option" :class="{active: gender==='male'}" @click="gender='male'">
          <image src="/static/boy.png" alt="男生头像"></image>
          <view>男生</view>
        </view>
        <view class="option" :class="{active: gender==='female'}" @click="gender='female'">
          <image src="/static/girl.png" alt="女生头像"></image>
          <view>女生</view>
        </view>
      </view>
      <button class="next-btn" @click="goNext">→</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      gender: ''
    }
  },
  methods: {
    goNext() {
      if (!this.gender) {
        uni.showToast({ title: '请选择性别', icon: 'none' });
        return;
      }
      uni.navigateTo({ url: '/pages/info/info?gender=' + this.gender });
    }
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  background: linear-gradient(180deg, #FFD9A0 0%, #FFF6ED 100%);
}
.header {
  display: flex;
  align-items: center;
  margin-top: 40rpx;
  margin-left: 40rpx;
}
.logo {
  width: 60rpx;
  height: 60rpx;
}
.hello {
  font-size: 36rpx;
  font-weight: bold;
  margin-left: 16rpx;
}
.desc {
  font-size: 22rpx;
  color: #888;
  margin-left: 16rpx;
}
.card {
  background: #fff;
  border-radius: 24rpx;
  margin: 80rpx 32rpx 0 32rpx;
  padding: 48rpx 0 80rpx 0;
  box-shadow: 0 8rpx 32rpx #f6e7d6;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-size: 32rpx;
  font-weight: bold;
  margin-bottom: 48rpx;
}
.gender-options {
  display: flex;
  justify-content: center;
  margin-bottom: 60rpx;
}
.option {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 40rpx;
  border: 4rpx solid transparent;
  border-radius: 50%;
  padding: 12rpx;
  transition: border 0.2s;
}
.option.active {
  border-color: #FF9900;
  background: #FFF7E6;
}
.option image {
  width: 120rpx;
  height: 120rpx;
  margin-bottom: 12rpx;
}
.next-btn {
  width: 120rpx;
  height: 60rpx;
  background: #FF9900;
  color: #fff;
  border-radius: 32rpx;
  font-size: 36rpx;
  border: none;
  margin-top: 20rpx;
}
</style>