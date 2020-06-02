import Vue from 'vue'
import store from '../store'
import { fetchUrl } from '../config'

let user = {
	// user_type: 3,
	// customer_id: ''
}
function getType (user, data, method) {
	let type = {}
	if (!method) {
		method = 'post'
		type = {
			method,
			data: {
				...user,
				...data
			},
			header: {
				'content-type': 'application/x-www-form-urlencoded',
			}
		}
	} else {
		method = 'get'
		type = {
			method,
			params: {
				...data
			}
		}
	}
	return type
}

export const fetch = (url, data, method) => {
	// user.customer_id = store.state.userInfo.customer_id || ''
	// user.user_type = 1
	return new Promise((resolve, reject) => {
		uni.request({
			url: fetchUrl + url,
			...getType(user, data, method),
			header: {
				content: 'application/json',
				'access-token': store.state.userInfo.access_token || ''
			},
			success (res) {
				// 请求成功直接返回result
				if (res.data.code == 0) {
					resolve(res.data.result)
				} else {
					resolve(res.data)
					Vue.prototype.$toast(res.data.msg)
				}
			},
			fail (err) {
				reject(err)
			}
		})
	}).catch(err => console.log(err))
}