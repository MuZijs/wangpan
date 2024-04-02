<template>
	<view class="flex flex-column" style="height: 100vh;">
		<view class="flex border-bottom border-light-secondary" style="height: 100rpx;">
			<view v-for="(item, index) in tabBars" :key="index" class="flex-1 flex flex-column justify-center align-center" :class="tabIndex === index ? 'text-main' : ''" @click="changeTab(index)">
				<text class="font-md">{{item.name}}</text>
				<text class="rounded" :class="tabIndex === index ? 'bg-main' : 'bg-white'" style="height: 8rpx;width: 30rpx"></text>
			</view>
		</view>
		<swiper class="flex-1 flex" :duration="250" :current="tabIndex" @change="changeTab($event.detail.current)">
			<swiper-item class="flex-1 flex" v-for="(item, index) in tabBars" :key="index">
				<scroll-view scroll-y="true"  class="flex-1">
					<view class="flex align-center bg-light font-sm px-2 text-muted" style="height: 60rpx;">
						文件下载至：xxx/xxx/xxx
					</view>
					<view class="p-2 text-muted border-bottom border-light-secondary font">
						下载中({{downing.length}})
					</view>
					<f-list v-for="(item, index) in downing" :key="index" :item="item" :index="index">
						<view class="flex align-center text-main" style="height: 70rpx;">
							<text class="iconfont icon-zanting"></text>
							<text class="ml-1">{{item.download}}%</text>
						</view>
						<progress slot="bottom" :percent="item.download" active-color="#009cff" :stroke-width="4"/>
					</f-list>
					<view class="p-2 text-muted border-bottom border-light-secondary font">
						下载完成({{downed.length}})
					</view>
					<f-list v-for="(item, index) in downed" :key="'d'+index" :item="item" :index="index" :show-right="false">
					</f-list>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import fList from '@/components/common/f-list.vue';
	export default {
		components: {
			fList
		},
		data() {
			return {
				tabIndex: 0,
				tabBars: [
					{name:'下载列表'},
					{name: '上传列表'}
				],
				list: [
					{
						type: 'video',
						name: 'uni-app介绍',
						data: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app-video-courses.mp4',
						create_time: '2024-04-01 09:35',
						download: 20
					},
					{
						type: 'image',
						name: '风景.jpg',
						data: '/static/logo.png',
						create_time: '2024-04-01 15:45',
						download: 100
					}
				],
			}
		},
		computed: {
			downing() {
				return this.list.filter(item => item.download < 100)
			},
			downed() {
				return this.list.filter(item => item.download === 100)
			}
		},
		methods: {
			changeTab(index) {
				this.tabIndex = index
			}
		}
	}
</script>

<style>

</style>
