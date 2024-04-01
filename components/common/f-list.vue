<template>
	<view class="flex align-center p-3 border-bottom border-light-secondary">
		<text class="iconfont" :class="iconClass" style="font-size: 60rpx;"></text>
		<view class="flex flex-column ml-3">
			<view class="font-md">
				{{item.name}}
			</view>
			<view class="font-sm text-muted">{{item.create_time}}</view>
		</view>
		<view class="ml-auto flex align-center justify-center" style="height: 70rpx;width: 70rpx;" @click.stop="select">
			<text v-if="!item.checked" class="rounded-circle border" style="height: 25rpx;width: 25rpx;"></text>
			<text v-else class="iconfont icon-xuanze-yixuan text-primary" style="font-size: 40rpx;"></text>
		</view>
	</view>
</template>

<script>
	const icons = {
		"dir": {
			icon: "icon-file-b-2",
			color: "text-warning"
		},
		"image": {
			icon: "icon-file-b-6",
			color: "text-success"
		},
		"video": {
			icon: "icon-file-b-9",
			color: "text-primary"
		},
		"text": {
			icon: "icon-file-s-7",
			color: "text-info"
		},
		"none": {
			icon: "icon-file-b-8",
			color: "text-muted"
		},
	}
	export default {
		props: {
			item: Object,
			index: [Number, String]
		},
		data() {
			return {
				
			}
		},
		computed: {
			iconClass() {
				let item = icons[this.item.type]
				return `${item.icon} ${item.color}`
			}
		},
		methods: {
			select() {
				this.$emit('select',{
					index: this.index,
					value: !this.item.checked
				})
			}
		}
	}
</script>

<style>

</style>
