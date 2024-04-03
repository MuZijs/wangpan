<template>
	<view>
		<view style="height: 44px;"></view>
		<view class="flex align-center justify-center font-lg" style="margin-top: 100rpx;margin-bottom: 80rpx;">
			欢迎回来
		</view>
		<view class="px-4">
			<input type="text" v-model="form.username" class="uni-input bg-light rounded mb-4" placeholder="手机号/用户名/邮箱"/>
			<input type="safe-password" v-model="form.password" class="uni-input bg-light rounded mb-4" placeholder="密码"/>
			<input v-if="type === 'register'" type="safe-password" v-model="form.repassword" class="uni-input bg-light rounded mb-4" placeholder="确认密码"/>
			<view class="flex align-center justify-center bg-main text-white py-2 rounded-circle font-md" hover-class="bg-main-hover">
				{{type === 'login' ? '登录' : '注册'}}
			</view>
			<view class="flex align-center justify-center pt-5">
				<view class="mx-2 text-muted font-sm" @click="changeType">
					{{type === 'login' ? '注册账号' : '去登录'}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 'login',
				form: {
					username: '',
					password: '',
					repassword: ''
				}
			}
		},
		methods: {
			changeType() {
				if (this.type === 'login') {
					this.type = 'register'
				} else {
					this.type = 'login'
				}
			}
		}
	}
</script>

<style>

</style>
