<template>
	<view>
		<nav-bar>
			<template v-if="selectCount === 0">
				<text slot="left" class="font-md ml-3">首页</text>
				<template slot="right">
					<view class="flex align-center justify-center bg-light rounded-circle mr-3"
						hover-class="bg-hover-light" style="width: 60rpx;height: 60rpx;" @tap="openAddDialog">
						<text class="iconfont icon-zengjia"></text>
					</view>
					<view class="flex align-center justify-center bg-light rounded-circle mr-3"
						hover-class="bg-hover-light" style="width: 60rpx;height: 60rpx;" @tap="openSortDialog">
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
		<f-list v-for="(item, index) in list" :key="index" :item="item" :index="index" @select="select"
			@click="doEvent(item)"></f-list>
		<!-- 底部操作条 -->
		<view v-if="selectCount > 0">
			<view style="height: 115rpx;"></view>
			<view class="flex align-stretch bg-primary text-white fixed-bottom" style="height: 115rpx;">
				<view class="flex-1 flex flex-column align-center justify-center" v-for="(item, index) in actions"
					:key="index" hover-class="bg-hover-primary" @click="handleBottomEvent(item)">
					<text class="iconfont" :class="item.icon"></text>
					{{item.name}}
				</view>
			</view>
		</view>
		<!-- 是否删除 -->
		<f-dialog ref="delete">是否删除选中</f-dialog>
		<!-- 重命名 -->
		<f-dialog ref="rename">
			<input type="text" v-model="renameValue" placeholder="重命名" class="flex-1 rounded bg-light px-2"
				style="height: 95rpx;" />
		</f-dialog>
		<!-- 新建文件夹 -->
		<f-dialog ref="newdir">
			<input type="text" v-model="newdirname" placeholder="文件夹名称" class="flex-1 rounded bg-light px-2"
				style="height: 95rpx;" />
		</f-dialog>
		<!-- 添加 -->
		<uni-popup ref="add" type="bottom">
			<view class="bg-white flex" style="height: 200rpx;">
				<view class="flex-1 flex flex-column align-center justify-center" hover-class="bg-light"
					v-for="(item, index) in addList" :key="index" @click="handleAddEvent(item)">
					<view class="rounded-circle bg-light flex align-center justify-center iconfont"
						:class="item.icon + ' ' + item.color" style="height: 110rpx;width: 110rpx;"></view>
					<text class="font text-muted">{{item.name}}</text>
				</view>
			</view>
		</uni-popup>
		<!-- 排序框 -->
		<uni-popup ref="sort" type="bottom">
			<view class="bg-white">
				<view v-for="(item, index) in sortOptions" :key="index"
					class="flex align-center justify-center py-3 font border-bottom border-light-secondary"
					:class="sortIndex === index ? 'text-main' : 'text-dark'" hover-class="bg-light" @click="changeSort(index)">
					{{item.name}}
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import navBar from '@/components/common/nav-bar.vue'
	import fList from '@/components/common/f-list.vue';
	import fDialog from '@/components/common/f-dialog.vue';

	export default {
		components: {
			navBar,
			fList,
			fDialog
		},
		data() {
			return {
				renameValue: "",
				newdirname: "",
				list: [{
						type: 'dir',
						name: '我的文件',
						create_time: '2024-03-30 17:07',
						checked: false
					},
					{
						type: 'video',
						name: 'uni-app介绍',
						data: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app-video-courses.mp4',
						create_time: '2024-04-01 09:35',
						checked: false
					},
					{
						type: 'image',
						name: '风景.jpg',
						data: '/static/logo.png',
						create_time: '2024-04-01 15:45',
						checked: false
					}
				],
				addList: [{
						icon: 'icon-file-b-6',
						color: 'text-success',
						name: '上传图片'
					},
					{
						icon: 'icon-file-b-9',
						color: 'text-primary',
						name: '上传视频'
					},
					{
						icon: 'icon-file-b-8',
						color: 'text-muted',
						name: '上传文件'
					},
					{
						icon: 'icon-file-b-2',
						color: 'text-warning',
						name: '新建文件夹'
					},
				],
				sortIndex: 0,
				sortOptions: [{
						name: '按名称排序'
					},
					{
						name: '按时间排序'
					},
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
					return [{
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
			},
			handleBottomEvent(item) {
				switch (item.name) {
					case '删除':
						this.$refs.delte.open((close) => {
							this.list = this.list.filter(item => !item.checked)
							close()
							uni.showToast({
								title: '删除成功',
								icon: 'none'
							});
						})
						break;
					case '重命名':
						this.renameValue = this.selectList[0].name
						this.$refs.rename.open((close) => {
							if (this.renameValue === '') {
								return uni.showToast({
									title: '文件名不能为空',
									icon: 'none'
								});
							}
							this.selectList[0].name = this.renameValue
							close()
						})
						break;
					default:
						break;
				}
			},
			openAddDialog() {
				this.$refs.add.open()
			},
			openSortDialog() {
				this.$refs.sort.open()
			},
			changeSort(index) {
				this.sortIndex = index
				this.$refs.sort.close()
			},
			handleAddEvent(item) {
				this.$refs.add.close()
				switch (item.name) {
					case "新建文件夹":
						this.$refs.newdir.open((close) => {
							if (this.newdirname === '') {
								return uni.showToast({
									title: '文件夹名称不能为空',
									icon: 'none'
								});
							}
							// 请求服务器
							this.list.push({
								type: 'dir',
								name: this.newdirname,
								create_time: '2024-04-01 15:24',
								checked: false
							})
							uni.showToast({
								title: '新建文件夹成功',
								icon: 'none'
							});
							close()
						})
						break;
					default:
						break;
				}
			},
			doEvent(item) {
				switch (item.type) {
					case 'image': // 预览图片
						let images = this.list.filter(item => item.type === 'image')
						uni.previewImage({
							current: item.data,
							urls: images.map(item => item.data)
						})
						break;
					case 'video': // 预览视频
						uni.navigateTo({
							url: '/pages/video/video?url=' + item.data + '&title=' + item.name
						})
						break
					default:
						break;
				}
			}

		}
	}
</script>

<style>

</style>