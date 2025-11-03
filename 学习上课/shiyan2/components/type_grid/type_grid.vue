<template>
  <view class="type-grid">
    <view
      class="type-grid-item"
      v-for="(type, idx) in activityTypes"
      :key="type.name"
      :class="{ active: typeIdx === idx }"
      @tap="onTypeSelect(idx)"
    >
      <image class="type-icon" :src="type.icon" mode="aspectFit" />
      <text class="type-label">{{ type.name }}</text>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

// 用图片加载SVG，全部橙色
const activityTypes = ref([
  {
    name: '热门活动',
    icon:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZsYW1lLWljb24gbHVjaWRlLWZsYW1lIj48cGF0aCBkPSJNOC41IDE0LjVBMi41IDIuNSAwIDAgMCAxMSAxMmMwLTEuMzgtLjUtMi0xLTMtMS4wNzItMi4xNDMtLjIyNC00LjA1NCAyLTYgLjUgMi41IDIgNC45IDQgNi41IDIgMS42IDMgMy41IDMgNS41YTcgNyAwIDEgMS0xNCAwYzAtMS4xNTMuNDMzLTIuMjk0IDEtM2EyLjUgMi41IDAgMCAwIDIuNSAyLjV6Ii8+PC9zdmc+',
  },
  {
    name: '全部',
    icon:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXJlY2VpcHQtdGV4dC1pY29uIGx1Y2lkZS1yZWNlaXB0LXRleHQiPjxwYXRoIGQ9Ik00IDJ2MjBsMi0xIDIgMSAyLTEgMiAxIDItMSAyIDEgMi0xIDIgMVYybC0yIDEtMi0xLTIgMS0yLTEtMiAxLTItMS0yIDFaIi8+PHBhdGggZD0iTTE0IDhIOCIvPjxwYXRoIGQ9Ik0xNiAxMkg4Ii8+PHBhdGggZD0iTTEzIDE2SDgiLz48L3N2Zz4=',
  },
  {
    name: '心理讲座',
    icon:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXByZXNlbnRhdGlvbi1pY29uIGx1Y2lkZS1wcmVzZW50YXRpb24iPjxwYXRoIGQ9Ik0yIDNoMjAiLz48cGF0aCBkPSJNMjEgM3YxMWEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMlYzIi8+PHBhdGggZD0ibTcgMjEgNS01IDUgNSIvPjwvc3ZnPg==',
  },
  {
    name: '户外体验',
    icon:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRlbnQtdHJlZS1pY29uIGx1Y2lkZS10ZW50LXRyZWUiPjxjaXJjbGUgY3g9IjQiIGN5PSI0IiByPSIyIi8+PHBhdGggZD0ibTE0IDUgMy0zIDMgMyIvPjxwYXRoIGQ9Im0xNCAxMCAzLTMgMyAzIi8+PHBhdGggZD0iTTE3IDE0VjIiLz48cGF0aCBkPSJNMTcgMTRIN2wtNSA4aDIwWiIvPjxwYXRoIGQ9Ik04IDE0djgiLz48cGF0aCBkPSJtOSAxNCA1IDgiLz48L3N2Zz4=',
  },
  {
    name: '情绪减压',
    icon:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJhYnktaWNvbiBsdWNpZGUtYmFieSI+PHBhdGggZD0iTTEwIDE2Yy41LjMgMS4yLjUgMiAuNXMxLjUtLjIgMi0uNSIvPjxwYXRoIGQ9Ik0xNSAxMmguMDEiLz48cGF0aCBkPSJNMTkuMzggNi44MTNBOSA5IDAgMCAxIDIwLjggMTAuMmEyIDIgMCAwIDEgMCAzLjYgOSA5IDAgMCAxLTE3LjYgMCAyIDIgMCAwIDEgMC0zLjZBOSA5IDAgMCAxIDEyIDNjMiAwIDMuNSAxLjEgMy41IDIuNXMtLjkgMi41LTIgMi41Yy0uOCAwLTEuNS0uNC0xLjUtMSIvPjxwYXRoIGQ9Ik05IDEyaC4wMSIvPjwvc3ZnPg==',
  },
  {
    name: '艺术疗愈',
    icon:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBhbGV0dGUtaWNvbiBsdWNpZGUtcGFsZXR0ZSI+PHBhdGggZD0iTTEyIDIyYTEgMSAwIDAgMSAwLTIwIDEwIDkgMCAwIDEgMTAgOSA1IDUgMCAwIDEtNSA1aC0yLjI1YTEuNzUgMS43NSAwIDAgMC0xLjQgMi44bC4zLjRhMS43NSAxLjc1IDAgMCAxLTEuNCAyLjh6Ii8+PGNpcmNsZSBjeD0iMTMuNSIgY3k9IjYuNSIgcj0iLjUiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxjaXJjbGUgY3g9IjE3LjUiIGN5PSIxMC41IiByPSIuNSIgZmlsbD0iY3VycmVudENvbG9yIi8+PGNpcmNsZSBjeD0iNi41IiBjeT0iMTIuNSIgcj0iLjUiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxjaXJjbGUgY3g9IjguNSIgY3k9IjcuNSIgcj0iLjUiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==',
  },
  {
    name: '志愿服务',
    icon:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhhbmQtaGVhcnQtaWNvbiBsdWNpZGUtaGFuZC1oZWFydCI+PHBhdGggZD0iTTExIDE0aDJhMiAyIDAgMSAwIDAtNGgtM2MtLjYgMC0xLjEuMi0xLjQuNkwzIDE2Ii8+PHBhdGggZD0ibTcgMjAgMS42LTEuNGMuMy0uNC44LS42IDEuNC0uNmg0YzEuMSAwIDIuMS0uNCAyLjgtMS4ybDQuNi00LjRhMiAyIDAgMCAwLTIuNzUtMi45MWwtNC4yIDMuOSIvPjxwYXRoIGQ9Im0yIDE1IDYgNiIvPjxwYXRoIGQ9Ik0xOS41IDguNWMuNy0uNyAxLjUtMS42IDEuNS0yLjdBMi43MyAyLjczIDAgMCAwIDE2IDRhMi43OCAyLjc4IDAgMCAwLTUgMS44YzAgMS4yLjggMiAxLjUgMi44TDE2IDEyWiIvPjwvc3ZnPg==',
  },
  {
    name: '更多',
    icon:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWVsbGlwc2lzLWljb24gbHVjaWRlLWVsbGlwc2lzIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxIi8+PGNpcmNsZSBjeD0iMTkiIGN5PSIxMiIgcj0iMSIvPjxjaXJjbGUgY3g9IjUiIGN5PSIxMiIgcj0iMSIvPjwvc3ZnPg==',
  },
]);

const typeIdx = ref(0);

function onTypeSelect(idx) {
  typeIdx.value = idx;
}
</script>

<style scoped>
.type-grid {
  width: 96vw;
  margin: 0 auto 12rpx auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12rpx 0;
  background: none;
}

.type-grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12rpx 0;
  border-radius: 16rpx;
  transition: background 0.15s;
}

.type-grid-item.active {
  background: #FFF5E0;
  box-shadow: 0 4rpx 14rpx #fff2e0;
}

.type-icon {
  width: 48rpx;
  height: 48rpx;
  margin-bottom: 4rpx;
}

.type-label {
  font-size: 22rpx;
  color: #FF9100;
  font-weight: 500;
}
</style>
