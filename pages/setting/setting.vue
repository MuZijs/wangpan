<template>
	<view>
		<view class="flex align-center justify-center bg-main text-white py-2 rounded-circle font-md" hover-class="bg-main-hover" @click="logout">
			退出
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
			logout() {
				uni.showToast({
					title: '退出成功',
					icon: 'none'
				});
				uni.reLaunch({
					url:'/pages/login/login'
				})
			}
		}
	}
</script>

<style>

</style>
