<template>
	<uni-popup ref="dialog">
		<view class="bg-white rounded" style="width: 600rpx;">
			<view class="font-md font-weight-bold flex align-center justify-center border-bottom border-light-secondary" style="height: 100rpx;">
				{{title}}
			</view>
			<view class="flex align-center justify-center p-3"><slot></slot></view>
			<view class="flex border-top border-light-secondary" style="height:100rpx">
				<view class="flex-1 text-muted flex align-center justify-center" @tap="cancel">{{cancelText}}</view>
				<view class="flex-1 text-main flex align-center justify-center" @tap="confirm">{{confirmText}}</view>
			</view>
		</view>
	</uni-popup>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: "提示"
			},
			cancelText: {
				type: String,
				default: "取消"
			},
			confirmText: {
				type: String,
				default: "确定"
			}
		},
		data() {
			return {
				callback: false
			}
		},
		methods: {
			open(callback = false) {
				this.callback = callback
				this.$refs.dialog.open()
			},
			cancel() {
				this.$emit('cancel')
				this.$refs.dialog.close()
			},
			confirm() {
				if (typeof this.callback === 'function') {
					this.callback(() => {
						this.cancel()
					})
				} else {
					this.$emit('confirm')
					this.cancel()
				}
			}
		}
	}
</script>

<style>

</style>
