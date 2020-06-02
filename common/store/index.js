import Vue from 'vue'
import Vuex from 'vuex'
import {
	wxLogin,
	addressDefault,
	createOrder,
	payOrderApi
} from '../api'
// 测试api
import {
	orderListApi,
	cacalOrder
} from '../api'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		wxCode: '', 
		userInfo: {},
		// 地址信息
		addressList: [],
	},
	getters: {},
	mutations: {
		setUser (state, data) {
			state.userInfo = {
				...state.userInfo,
				...data
			}
		}
	},
	actions: {
		// 登陆
		loginAction ({ commit }) {
			uni.login({
			  provider: 'weixin',
			  success: function (loginRes) {
			    console.log(loginRes);
			    // 获取用户信息
			    wxLogin({
					wechat_mini_code: loginRes.code
				}).then(res => {
					console.log(res)
					if (!res.msg) {
						commit('setUser', res)
					}
					// 获取默认地址  测试
					// addressDefault()
					// orderListApi({
					// 	"page": 3,
					// 	"rows": 10,
					// }).then(orders => {
					// 	console.log(orders)
					// 	if (!orders.msg) {
					// 		orders.list.forEach(item => {
					// 			cacalOrder({
					// 				"id": item.order.id,
					// 				"state_remark": "测试取消"
					// 			}).then(res => Vue.prototype.$toast('取消订单成功'))
					// 		})
					// 	}
					// })
				})
			  }
			});
		},
		// 创建订单 并获得支付信息
		createOrderAction ({ commit, dispatch }, data) {
			return new Promise((resolve, reject) => {
				createOrder(data).then(res => {
					if (!res.msg) {
						let { order_id, order_sn } = res
						payOrderApi({ order_id, order_sn }).then(pays => {
							if (!pays.msg) {
								resolve(pays)
							}
						})
					}
				})
			})
		},
		// 调用微信支付
		wxPaymentAction ({ commit }, data) {
			uni.requestPayment({
				provider: 'wxpay',
				nonceStr: data.nonceStr,
				timeStamp: data.timeStamp,
				'package': data.package,
				signType: data.signType,
				paySign: data.paySign,
				success: function (res) {
					console.log(res)
					Vue.prototype.$toast('支付成功')
				},
				fail: function (err) {
					reject(err)
				}
			})
		}
	},
	mudules: {},
})