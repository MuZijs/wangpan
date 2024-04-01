<template>
	<view>
		<nav-bar>
			<template v-if="selectCount === 0">
				<text slot="left" class="font-md ml-3">首页</text>
				<template slot="right">
					<view class="flex align-center justify-center bg-light rounded-circle mr-3"
						style="width: 60rpx;height: 60rpx;">
						<text class="iconfont icon-zengjia"></text>
					</view>
					<view class="flex align-center justify-center bg-light rounded-circle mr-3"
						style="width: 60rpx;height: 60rpx;">
						<text class="iconfont icon-gengduo"></text>
					</view>
				</template>
			</template>

			<template v-else>
				<view slot="left" class="font-md ml-3 text-primary" @click="handleCheckAll(false)">取消</view>
				<text class="font-md font-weight-bold">已选中{{selectCount}}个</text>
				<view slot="right" class="font-md mr-3 text-primary" @click="handleCheckAll(true)">全选</view>
			</template>


		</nav-bar>
		<!-- 搜索框 -->
		<view class="px-3 py-2">
			<view class="position-relative">
				<view class="position-absolute flex align-center justify-center"
					style="width: 70rpx;height: 70rpx;left: 0;top: 0">
					<text class="iconfont icon-sousuo text-light-muted"></text>
				</view>
				<input type="text" style="height: 70rpx;padding-left: 70rpx;" class="bg-light rounded-circle font-md"
					placeholder="搜索网盘文件" />
			</view>
		</view>
		<!-- 列表 -->
		<f-list v-for="(item, index) in list" :key="index" :item="item" :index="index" @select="select"></f-list>
		<!-- 底部操作条 -->
		<view v-if="selectCount > 0">
			<view style="height: 115rpx;"></view>
			<view class="flex align-stretch bg-primary text-white fixed-bottom" style="height: 115rpx;">
				<view class="flex-1 flex flex-column align-center justify-center" v-for="(item, index) in actions"
					:key="index" hover-class="bg-hover-primary">
					<text class="iconfont" :class="item.icon"></text>
					{{item.name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navBar from '@/components/common/nav-bar.vue'
	import fList from '@/components/common/f-list.vue';
	export default {
		components: {
			navBar,
			fList
		},
		data() {
			return {
				list: [{
						type: 'dir',
						name: '我的文件',
						create_time: '2024-03-30 17:07',
						checked: false
					},
					{
						type: 'dir',
						name: '我的设备',
						create_time: '2024-04-01 09:35',
						checked: false
					}
				]
			}
		},
		onLoad() {

		},
		computed: {
			// 选中列表
			selectList() {
				return this.list.filter(item => item.checked)
			},
			// 选中数量
			selectCount() {
				return this.selectList.length
			},
			actions() {
				if (this.selectCount > 1) {
					return [
						{
							icon: 'icon-xiazai',
							name: '下载'
						},
						{
							icon: 'icon-shanchu',
							name: '删除'
						},
					]
				}
				return [{
						icon: 'icon-xiazai',
						name: '下载'
					},
					{
						icon: 'icon-fenxiang-1',
						name: '分享'
					},
					{
						icon: 'icon-shanchu',
						name: '删除'
					},
					{
						icon: 'icon-chongmingming',
						name: '重命名'
					}
				]
			}
		},
		methods: {
			select(e) {
				this.list[e.index].checked = e.value
			},
			handleCheckAll(checked) {
				this.list.forEach(item => item.checked = checked)
			}
		}
	}
</script>

<style>

</style>