<template>
	<view>
		<!-- 自定义导航栏 -->
		<view class="fixed-top bg-white">
			<view class="status_bar"></view>
			<view class="flex align-center border-bottom" style="height: 44px;">
				<view class="flex-1 flex">
					<slot name="left"></slot>
				</view>
				<view class="flex-1 flex justify-center"><slot></slot></view>
				<view class="flex-1 flex justify-end">
					<slot name="right"></slot>
				</view>
			</view>
		</view>
		<!-- 占位 -->
		<view>
			<view class="status_bar"></view>
			<view style="height: 44px;"></view>
		</view>
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
