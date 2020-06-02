
<!-- <view class="l-size-item l-my-flex-bw" v-for="(item,index) in list" :key="index">
					<view>{{item}}</view>
					<view><image src="../../static/del.png" mode=""></image></view>
				</view> -->
<template>
	<view class="content">
		<!-- 规格一 -->
				
		<view class="l-size" v-if="typeList[0]">
			 <!-- v-for="(item,index) in typeList" :key="index" -->
			<view class=" l-my-flex-bw ">
				<view class="l-size-title">{{typeList[0].size}}</view>
				<view><u-icon name="close" color="#B1B1B6" size="28"></u-icon></view>
			</view>
			<!-- 颜色种类 -->
			<view class="l-my-flex-start">
				
				<view class="l-size-item l-my-flex-bw" v-for="(item,index) in list0" :key="index">
					<view>{{item.size}}</view>
					<view><image src="../../static/del.png" mode=""></image></view>
				</view>
				
				<!-- 添加 -->
				<view @click="addSize0">
					<view class="l-size-item l-my-flex-center" v-if="!addStatus0">
						<view><u-icon name="plus" color="#B1B1B6" size="28"></u-icon></image></view>
						<view>添加</view>
					</view>
					<view class="l-size-item l-my-flex-center" v-if="addStatus0">
						<input type="text" value="" placeholder="请输入" v-model="addValue0" @blur="add0"/>
					</view>
				</view>
				
			</view>
		</view>
		
		<!-- 规格二 -->
				
		<view class="l-size" v-if="typeList[1]">
			 <!-- v-for="(item,index) in typeList" :key="index" -->
			<view class=" l-my-flex-bw ">
				<view class="l-size-title">{{typeList[1].size}}</view>
				<view><u-icon name="close" color="#B1B1B6" size="28"></u-icon></view>
			</view>
			<!-- 颜色种类 -->
			<view class="l-my-flex-start">
				
				<view class="l-size-item l-my-flex-bw" v-for="(item,index) in list1" :key="index">
					<view>{{item.size}}</view>
					<view><image src="../../static/del.png" mode=""></image></view>
				</view>
				
				<!-- 添加 -->
				<view @click="addSize1">
					<view class="l-size-item l-my-flex-center" v-if="!addStatus1">
						<view><u-icon name="plus" color="#B1B1B6" size="28"></u-icon></image></view>
						<view>添加</view>
					</view>
					<view class="l-size-item l-my-flex-center" v-if="addStatus1">
						<input type="text" value="" placeholder="请输入" v-model="addValue1" @blur="add1"/>
					</view>
				</view>
				
			</view>
		</view>
		
		<!-- 添加规格 -->
		<view class="l-add-size">
			<view class="l-my-flex-center" @click="btnClick">
				<view><u-icon name="plus" color="#B1B1B6" size="28"></u-icon></image></view>
				<view>添加</view>
			</view>
		</view>
		
		<!-- 价格及库存 -->
		<view class="l-price">
			价格及库存
		</view>
		<!-- 规格列表 -->
		<view class="l-type-list">
			<!-- 规格列表项 -->
			<view class="l-type-item" v-for="(item,index) of typeListInfo" :key="index">
				<!-- 列表项title -->
				<view class="l-type-item-title">
					{{item.size}}
				</view>
				<!-- 列表项价格 -->
				<view class="l-type-item-price l-my-flex-bw">
					<view class="l-my-flex-bw">
						<view>原价</view>
						<view class="l-price-money">￥0.00</view>
					</view>
					<view class="l-my-flex-bw">
						<view>现价</view>
						<view class="l-price-money">￥0.00</view>
					</view>
				</view>
				
				<!-- 列表项库存 -->
				<view class="l-type-item-price l-my-flex-bw">
					<view class="l-my-flex-bw">
						<view>库存</view>
						<view class="l-price-kucun">20</view>
					</view>
				</view>
				<!-- 预览图 -->
				<view class="l-pic-prev">
					<view class="">
						<view class="l-pic-text">预览图</view>
						<view class="l-pic-upload">
							<view><image src="../../static/l-upload.png" mode=""></image></view>
							<view class="">上传图片</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="u-demo-area">
			<u-popup border-radius="10" v-model="show" 
				:mode="mode" 
				name="123"
				length="50%" :mask="mask"
				:closeable="closeable"
				:close-icon-pos="closeIconPos"
			>
				<view class="l-popup">
					<!-- title -->
					<view class="l-my-flex-bw l-popup-title">
						<view class="l-popup-cancel" @click="cancelSelect">取消</view>
						<view>添加商品规格</view>
						<view class="l-popup-confirm" @click="comfirmSelect">确认</view>
					</view>
					<!-- 已选择选项数量 -->
					<view class="l-my-flex-start l-select-info">
						 <span class="l-select-title">已选</span>
						 <span class="l-select-sum">{{select_sum}}/2</span>
					</view>
					<!-- 选项 -->
					<view class="l-select-list l-my-flex-start" @click="select_item">
						<view class="l-select-item" v-for="(item,index) of sizeList" :data-id="item.id" :key="index" :class="(active_index[0]==item.id||active_index[1]==item.id)?'selectActive':''">{{item.size}}</view>
					</view>
				</view>
			</u-popup>
		</view>
		
		<!-- 弹出框 -->
		<view>
				<u-toast ref="uToast" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				// 规格一
				addStatus0:false,
				list0:[],
				id0:"0",
				addValue0:"",
				// 规格二
				addStatus1:false,
				list1:[],
				id1:999,
				addValue1:"",
				
				show: false,
				mode: 'bottom',
				mask: true, // 是否显示遮罩
				closeable: false,
				closeIconPos: 'top-right',
				// 总规格
				sizeList:[
					{
						id:1,
						size:"颜色"
					},
					{
						id:2,
						size:"尺寸"
					},
					{
						id:3,
						size:"布料"
					},
					{
						id:4,
						size:"材质"
					},
					{
						id:5,
						size:"口味"
					},
					{
						id:6,
						size:"容量"
					},
					{
						id:7,
						size:"款式"
					},
					{
						id:8,
						size:"功效"
					},
					{
						id:9,
						size:"重量"
					},
					{
						id:10,
						size:"时间"
					},
				],
				// 选中的ID
				active_index:[],
				select_sum:0,
				// 选中规格列表
				typeList:[],
				// 已选则总规格列表
				typeListInfo:[],
				// 混合规格id
				id2:1000
			}
		},
		onLoad() {

		},
		methods: {
		  btnClick() {
		  	// console.log(this.show);
		  	this.show = true;
				this.select_sum = "0"
		  	// console.log(this.show);
		  },
			close() {},
			open() {},
			addSize0(){
				this.addStatus0 = true
			},
			addSize1(){
				this.addStatus1 = true
			},
			// 规格一
			add0(e){
				this.addStatus0 = false
				if(!this.addValue0){
					this.$refs.uToast.show({
										title: '请输入正确规格',
										type: 'error',
									})
									return
				}
				for(var item of this.list0){
					if(item == this.addValue0){
						this.$refs.uToast.show({
											title: '已有相同规格',
											type: 'error',
										})
										this.addValue0=""
										return
					}
				}
				var obj = {}
				this.id0 =parseInt(this.id0)+1;
				
				obj.id = this.id0
				obj.size = this.addValue0
				this.list0.push(obj)
				
				this.addValue0=""
				this.setListInfo()
			},
			// 规格二
			add1(e){
				this.addStatus1 = false
				if(!this.addValue1){
					this.$refs.uToast.show({
										title: '请输入正确规格',
										type: 'error',
									})
									return
				}
				for(var item of this.list1){
					if(item == this.addValue1){
						this.$refs.uToast.show({
											title: '已有相同规格',
											type: 'error',
										})
										this.addValue1=""
										return
					}
				}
				var obj = {}
				this.id1 =parseInt(this.id1)-1;
				
				obj.id = this.id1
				obj.size = this.addValue1
				this.list1.push(obj)
				this.addValue1="",
				this.setListInfo()
			},
			// 列表处理
			setListInfo(){
				var arr = []
				for(var item of this.list0){
					for(var idx of this.list1){
						var obj = {}
						this.id2 =parseInt(this.id2)+1;
						obj.id = this.id2;
						obj.size = item.size +"-"+idx.size;
						arr.push(obj)
					}
				}
				this.typeListInfo = arr;
				console.log(this.typeListInfo)
			},
			select_item(e){
				// e.target.dataset.id
				// this.active_index  arr
				var selectId = e.target.dataset.id;
				var active_arr = this.active_index;
				var lengths = this.active_index.length;
				if(lengths<=2){
					var index = active_arr.indexOf(selectId)
					console.log(index)
					if(index != -1){
						var indexs = Math.abs(index-1);
						var new_active_arr = active_arr.splice(indexs,1)
						this.active_index = new_active_arr
					}else{
						this.active_index.push(selectId)
					}
				}
				if(this.active_index.length>2){
					
				}else{
					
				this.select_sum=this.active_index.length
				}
			},
			cancelSelect(){
				this.show = false
				this.active_index = []
			},
			comfirmSelect(){
				this.show = false;
				this.typeList =[]
				this.typeListInfo = []
				this.list0 =[]
				this.list1 =[]
				
				var typeList = []
				for(var item of this.active_index){
					for(var idx of this.sizeList){
						if(item == idx.id){
							typeList.push(idx)
						}
					}
				}
				this.typeList = typeList
				this.active_index = []
			},
		
		}
	}
</script>

<style>
.l-size{
	padding: 27.17rpx 26.27rpx;
	background: #FFFFFF;
	margin-top: 9rpx;
}
.l-size-title{
	font-size:27rpx;
	font-family:PingFang SC;
	font-weight:bold;
	color:rgba(51,51,51,1);
	
}
.l-size-item{
	width:214.2rpx;
	height: 58rpx;
	background:rgba(248,248,248,1);
	border-radius:7px;
	padding: 0 18.12rpx;
	margin-top: 25.3rpx;
	margin-right:18.12rpx ;
	font-size:24rpx;
	font-family:PingFang SC;
	font-weight:400;
	color:rgba(51,51,51,1);
}
.l-size-item input{
	font-size: 27rpx;
}
.l-size-item image{
	width: 22.64rpx;
	height: 22.64rpx;
}
.l-add-size{
	padding: 27rpx 25rpx;
	margin-top: 9rpx;
	background: #FFFFFF;
}
.l-add-size>view{
	width: 100%;
	height: 58rpx;
	background:rgba(248,248,248,1);
	border-radius:7px;
}
.l-popup{
	width: 100%;
	padding: 36rpx 27rpx;
}
.l-popup-title{
	padding-bottom: 16rpx;
	border-bottom: 2rpx solid rgba(238,238,238,1);
}
.l-popup-cancel{
	font-size: 27rpx;
	font-family:PingFang SC;
	font-weight:400;
	color:rgba(177,177,182,1);
}
.l-popup-confirm{
	font-size:27rpx;
	font-family:PingFang SC;
	font-weight:400;
	color:rgba(233,51,64,1);
}
.l-select-info{
	margin-top: 18rpx;
}
.l-select-title{
	font-size:22rpx;
	font-family:PingFang SC;
	font-weight:400;
	color:rgba(177,177,182,1);
}
.l-select-sum{
	font-size:26rpx;
	font-family:PingFang SC;
	font-weight:400;
	color:#333333;
}
.l-select-item{
	width: 212rpx;
	height: 58rpx;
	line-height: 58rpx;
	margin:20rpx 20rpx 0 0 ;
	background:rgba(248,248,248,1);
	border-radius:7rpx;
	font-size:24rpx;
	font-family:PingFang SC;
	font-weight:400;
	color:rgba(51,51,51,1);
	transition: all .5s;
}
.selectActive{
	color: #FFFFFF;
	background:rgba(215,185,117,1);
}
.l-price{
	padding: 27rpx 26rpx;
	background: #FFFFFF;
	margin-top: 18rpx;
	font-size:27rpx;
	font-family:PingFang SC;
	font-weight:bold;
	color:rgba(51,51,51,1);
}
.l-type-list{
	/* margin-top: 9rpx; */
	
}
.l-type-item{
	padding: 27rpx 26rpx;
	background: #FFFFFF;
	margin-top: 9rpx;
}
.l-type-item-title{
	font-size:27rpx;
	font-family:PingFang SC;
	font-weight:400;
	color:rgba(51,51,51,1);
	padding-bottom: 27rpx;
	border-bottom: 2rpx solid rgba(237,237,237,1);
}
.l-type-item-price{
	padding:27rpx 0;
	border-bottom: 2rpx solid rgba(237,237,237,1);
}
.l-type-item-price>view{
	width: 50%;
	padding-right: 0rpx;
}
.l-price-money{
	width: 220rpx;
	font-size:27rpx;
	font-family:PingFang SC;
	font-weight:400;
	color:rgba(177,177,181,1);
}
.l-price-kucun{
	width: 220rpx;
}
.l-pic-prev{
	padding-top: 26rpx;
}
.l-pic-prev>view{
	display: flex;
	justify-content: flex-start;
}
.l-pic-text{
	padding-right: 29rpx;
}
.l-pic-upload{
	width: 123rpx;
	height: 123rpx;
	border:2rpx dashed rgba(177,177,181,1);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.l-pic-upload>view{
	font-size:21rpx;
	font-family:PingFang SC;
	font-weight:400;
	color:rgba(177,177,181,1);
}
.l-pic-upload image{
	width: 48rpx;
	height: 38rpx;
}
</style>
