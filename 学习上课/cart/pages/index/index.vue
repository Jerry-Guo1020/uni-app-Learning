<template>
  <view class="container">
    <view class="header">
      <text class="title">我的购物车</text>
    </view>

    <!-- 新增的输入框 -->
    <view class="input-container">
      <text class="input-label">优惠码：</text>
      <input
        class="input-field"
        type="text"
        placeholder="请输入优惠码"
        v-model="couponCode"
      />
      <text class="coupon-display" v-if="couponCode">您输入的优惠码是：{{ couponCode }}</text>
    </view>

    <scroll-view scroll-y class="cart-list">
      <view class="cart-item" v-for="(item, index) in cartList" :key="item.id">
        <!-- 商品选择框 -->
        <checkbox :checked="item.checked" @change="toggleItem(index)" />

        <!-- 商品信息 -->
        <view class="item-info">
          <text class="item-title">{{ item.title }}</text>
          <text class="item-price">￥{{ item.price }}</text>

          <!-- 数量控制 -->
          <view class="quantity-control">
            <button class="quantity-button" @click="decreaseQuantity(index)" :disabled="item.quantity <= 1">-</button>
            <text class="quantity">{{ item.quantity }}</text>
            <button class="quantity-button" @click="increaseQuantity(index)">+</button>
          </view>
        </view>

        <!-- 删除按钮 -->
        <button class="delete-button" @click="deleteItem(index)">删除</button>
      </view>
    </scroll-view>

    <!-- 底部结算栏 -->
    <view class="footer">
      <text class="total-price">总价：￥{{ totalPrice }}</text>
      <button class="checkout-button" @click="checkout">结算</button>
    </view>

    <!-- 加载提示 -->
    <view class="loading" v-if="isLoading">
      <text>加载中...</text>
    </view>

  </view>
</template>

<script>
import { ref, computed, onMounted } from 'vue';

export default {
  setup() {
    // 1. 购物车商品列表 (使用 ref 创建响应式数组)
    const cartList = ref([]);
    // 11.优惠代码框
    const couponCode = ref('');

    // 2. 是否正在加载数据 (用于显示加载动画)
    const isLoading = ref(false);

    // 3. 模拟从服务器获取商品数据 (使用 setTimeout 模拟网络延迟)
    const fetchCartData = () => {
      isLoading.value = true; // 开始加载时设置为 true

      setTimeout(() => {
        // 模拟服务器返回的数据
        const serverData = [
          { id: 1, title: '商品 A', price: 20, quantity: 1, checked: true },
          { id: 2, title: '商品 B', price: 30, quantity: 2, checked: false },
          { id: 3, title: '商品 C', price: 15, quantity: 1, checked: true },
        ];

        cartList.value = serverData; // 将服务器数据赋值给 cartList
        isLoading.value = false;  // 加载完成设置为 false
      }, 500); // 模拟 500 毫秒的延迟
    };

    // 4. 组件挂载后 (页面加载时) 自动获取购物车数据
    onMounted(() => {
      fetchCartData();
    });

    // 5. 计算总价 (使用 computed 创建计算属性，根据购物车列表自动更新)
    const totalPrice = computed(() => {
      let total = 0;
      for (const item of cartList.value) {
        if (item.checked) {
          total += item.price * item.quantity;
        }
      }
      return total;
    });

    // 6. 切换商品选中状态
    const toggleItem = (index) => {
      cartList.value[index].checked = !cartList.value[index].checked; // 直接反转 checked 状态
    };

    // 7. 增加商品数量
    const increaseQuantity = (index) => {
      cartList.value[index].quantity++; // 数量加 1
    };

    // 8. 减少商品数量
    const decreaseQuantity = (index) => {
      if (cartList.value[index].quantity > 1) {
        cartList.value[index].quantity--; // 数量大于 1 时才能减少
      }
    };

    // 9. 删除商品
    const deleteItem = (index) => {
      cartList.value.splice(index, 1); // 从列表中删除指定索引的商品
    };

    // 10. 结算
    const checkout = () => {
      uni.showToast({
        title: '结算功能暂未实现',
        icon: 'none',
      });
    };

    return {
      cartList,       //  购物车列表
      totalPrice,       //  总价
      isLoading,        //  是否正在加载
      toggleItem,       //  切换选中状态
      increaseQuantity, //  增加数量
      decreaseQuantity, //  减少数量
      deleteItem,       //  删除商品
      checkout,         //  结算
      couponCode       // 优惠码
    };
  },
};
</script>

<style lang="scss">
.container {
  padding: 20rpx;
}

.header {
  margin-bottom: 20rpx;

  .title {
    font-size: 36rpx;
    font-weight: bold;
  }
}
/*新增样式*/
.input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20rpx;
    padding: 10rpx;
    border: 1px solid #eee;
    border-radius: 5rpx;

    .input-label {
      font-size: 28rpx;
      margin-bottom: 5rpx;
    }

    .input-field {
      border: 1px solid #ccc;
      border-radius: 5rpx;
      padding: 10rpx;
      font-size: 28rpx;
    }

    .coupon-display {
      margin-top: 10rpx;
      font-size: 24rpx;
      color: #888;
    }
  }
.cart-list {
  height: 600rpx; /*  设置一个高度，让 scroll-view 可以滚动 */
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 20rpx;
  padding: 10rpx;
  border: 1px solid #eee;
  border-radius: 5rpx;
}

.item-info {
  flex: 1;
  margin-left: 20rpx;

  .item-title {
    font-size: 32rpx;
    margin-bottom: 10rpx;
  }

  .item-price {
    font-size: 28rpx;
    color: #ff0000;
  }

  .quantity-control {
    display: flex;
    align-items: center;
    margin-top: 10rpx;

    .quantity-button {
      padding: 5rpx 10rpx;
      border: 1px solid #ccc;
      border-radius: 5rpx;
      margin: 0 10rpx;
      font-size: 24rpx; /* 修改这里，设置你想要的字体大小 */
    }

    .quantity {
      font-size: 28rpx;
    }
  }
}

.delete-button {
  background-color: #dc3545;
  color: #fff;
  padding: 10rpx 20rpx;
  border-radius: 5rpx;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx;
  background-color: #f8f8f8;
  border-top: 1px solid #eee;

  .total-price {
    font-size: 32rpx;
    font-weight: bold;
  }

  .checkout-button {
    background-color: #28a745;
    color: #fff;
    padding: 10rpx 20rpx;
    border-radius: 5rpx;
  }
}

/* 加载提示样式 */
.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20rpx;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border-radius: 10rpx;
  z-index: 999;
}
</style>
