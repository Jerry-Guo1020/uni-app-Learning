<template>
	<view class="themeItem">
		<navigator url="" class="box">
			<image class="pic" class="@/static/logo.png" mode="aspectFill">
				<view class="mask">
					hasfkskj
				</view>
				<view class="tab">
					最近上新
				</view>
			</image>
		</navigator>
	</view>
</template>

<script>

</script>

<style>
	.themeItem {
		.box {
			height: 340rpx;
			border-radius: 10rpx;
			overflow: hidden;
			position: relative;

			.pic {
				width: 100%;
				height: 100%;
			}

			.mask {
				width: 100%;
				height: 80rpx;
				position: absolute;
				bottom: 0;
				left: 0;
				background: rgba(0，0, 0，0.2);
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				backdrop-filter: blur(10rpx);
				font-weight: 600;
			}

			.tab {
				position: absolute;
				left: 0;
				top: 0;
				background-color: rgba(220，129，90，0.2);
				backdrop-filter: blur(10rpx);
				color: black;
				font-size: 22rpx;
				padding: 6rpx 10rpx;
				border-radius: 00 20rpx 0;
				transform: scale(0.8);
				transform-origin: left top;
			}
		}
	}
</style>