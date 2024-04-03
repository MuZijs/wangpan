<template>
	<view>
		<view class="flex align-center p-3">
			<image src="../../static/logo.png" class="flex-shrink mr-3 rounded-circle" style="height: 120rpx;width: 120rpx;"></image>
			<view class="flex-1 flex-column text-muted font">
				<view class="flex align-end">
					<text class="font-lg text-dark mr-2">李宁</text>
					男 安徽
				</view>
				<text class="text-ellipsis">虚拟学院创始人</text>
			</view>
		</view>
		<view class="bg-light" style="height: 20rpx;"></view>
		<view class="p-3">
			<progress class="mb-3" percent="20" :stroke-width="3" />
			<view class="flex align-center justify-between font">
				<text class="text-muted">总：100GB</text>
				<text class="text-warning">已用：20G</text>
			</view>
		</view>
		<view class="bg-light" style="height: 20rpx;"></view>
		<navigator url="/pages/setting/setting">
			<uni-list-item title="其他设置" show-arrow :border="false" clickable></uni-list-item>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
