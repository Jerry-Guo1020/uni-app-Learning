<template>
  <view class="container">
    <view class="top">
      <image class="tree" src="/static/tree-main.png" alt="树洞主logo"></image>
      <view class="slogan">我们都需要一个心灵树洞</view>
      <view class="tags">
        <view class="tag tag1">#学业压力</view>
        <view class="tag tag2">#情绪情感</view>
        <view class="tag tag3">#人际交往</view>
        <view class="tag tag4">#职业规划</view>
        <view class="tag tag5">#生活适应</view>
        <view class="tag tag6">#其他类型</view>
      </view>
    </view>
    <view class="post-list">
      <view class="post">
        <view class="post-header">
          <image class="avatar" src="/static/avatar-main.png" alt="头像"></image>
          <view>
            <view class="post-title">大学生心灵树洞</view>
            <view class="post-time">2025年05月19日 17:46:50</view>
          </view>
        </view>
        <view class="post-tags">
          <view class="post-tag">#树洞倾诉</view>
          <view class="post-tag">六月心事，等你诉说</view>
        </view>
        <view class="post-content">
          六月的风，吹来了弹唱与玩笑，也吹进了每个人的心房。在这个充满活力与希望的月份，大学生心灵树洞向大家发起邀约啦！<br>
          无论是徘徊在分岔路口的小迷茫，或是一场想爆哭的雨后彩虹，一次和朋友的欢乐新聚；还是想和纸笔低语的心情故事……<br>
          都欢迎分享给我们！
        </view>
        <image class="post-img" src="/static/beach.png" alt="沙滩图片"></image>
        <view class="post-actions">
          <image src="/static/icon-comment.png" class="icon" alt="评论"></image>
          <image src="/static/icon-like.png" class="icon" alt="点赞"></image>
          <image src="/static/icon-fav.png" class="icon" alt="收藏"></image>
        </view>
        <view class="post-footer">
          <image class="footer-avatar" src="/static/avatar1.png" alt="头像"></image>
          <view class="footer-name">陈树洞</view>
          <view class="footer-comment">考完试就一定更美好啦！！！</view>
        </view>
        <view class="post-footer">
          <image class="footer-avatar" src="/static/avatar2.png" alt="头像"></image>
          <view class="footer-name">树小洞2025</view>
          <view class="footer-comment">未来要干嘛啊？好焦虑……</view>
        </view>
      </view>
      <!-- 可继续添加更多post -->
    </view>
    <view class="tabbar">
      <image src="/static/tab-home.png" class="tab-icon" alt="首页"></image>
      <image src="/static/tab-help.png" class="tab-icon" alt="求助"></image>
      <image src="/static/tab-tree.png" class="tab-icon center" alt="树洞"></image>
      <image src="/static/tab-message.png" class="tab-icon" alt="消息"></image>
      <image src="/static/tab-mine.png" class="tab-icon" alt="我的"></image>
    </view>
  </view>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  background: linear-gradient(180deg, #FFD9A0 0%, #FFF6ED 100%);
  padding-bottom: 120rpx;
}
.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40rpx;
}
.tree {
  width: 260rpx;
  height: 180rpx;
}
.slogan {
  font-size: 32rpx;
  font-weight: bold;
  margin: 24rpx 0 32rpx 0;
  color: #222;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 32rpx;
}
.tag {
  font-size: 22rpx;
  padding: 12rpx 28rpx;
  border-radius: 32rpx;
  margin: 8rpx;
  color: #fff;
  font-weight: bold;
}
.tag1 { background: #FFA940; }
.tag2 { background: #FF6F91; }
.tag3 { background: #FFD666; color: #333; }
.tag4 { background: #B37FEB; }
.tag5 { background: #5CDBD3; color: #333; }
.tag6 { background: #B7EB8F; color: #333; }
.post-list {
  padding: 0 24rpx;
}
.post {
  background: #fff;
  border-radius: 24rpx;
  margin-bottom: 32rpx;
  padding: 32rpx 24rpx;
  box-shadow: 0 8rpx 32rpx #f6e7d6;
}
.post-header {
  display: flex;
  align-items: center;
  margin-bottom: 12rpx;
}
.avatar {
  width: 64rpx;
  height: 64rpx;
  border-radius: 50%;
  margin-right: 16rpx;
}
.post-title {
  font-size: 28rpx;
  font-weight: bold;
}
.post-time {
  font-size: 20rpx;
  color: #888;
}
.post-tags {
  display: flex;
  margin: 12rpx 0;
}
.post-tag {
  background: #FFF7E6;
  color: #FF9900;
  border-radius: 24rpx;
  padding: 4rpx 16rpx;
  font-size: 20rpx;
  margin-right: 12rpx;
}
.post-content {
  font-size: 26rpx;
  color: #333;
  margin: 12rpx 0;
  line-height: 1.6;
}
.post-img {
  width: 100%;
  height: 180rpx;
  border-radius: 16rpx;
  margin: 16rpx 0;
  object-fit: cover;
}
.post-actions {
  display: flex;
  align-items: center;
  margin: 8rpx 0;
}
.icon {
  width: 36rpx;
  height: 36rpx;
  margin-right: 24rpx;
}
.post-footer {
  display: flex;
  align-items: center;
  margin-top: 8rpx;
}
.footer-avatar {
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
  margin-right: 8rpx;
}
.footer-name {
  font-size: 22rpx;
  font-weight: bold;
  margin-right: 8rpx;
}
.footer-comment {
  font-size: 22rpx;
  color: #666;
}
.tabbar {
  position: fixed;
  left: 0; right: 0; bottom: 0;
  height: 100rpx;
  background: #222;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
}
.tab-icon {
  width: 64rpx;
  height: 64rpx;
}
.center {
  width: 80rpx;
  height: 80rpx;
  margin-bottom: 24rpx;
}
</style>