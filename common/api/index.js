import { fetch } from '../utils/fetch.js'

/* 登录 */
export const wxLogin = (parmas) => {
	return fetch('/api/master/pub/login', parmas)
}

/* 注册 */
export const registerApi = (parmas) => {
	return fetch('/api/master/pub/register', parmas)
}

/* 获取直播橱窗商品 */
export const roomGoodsApi = (parmas) => {
	// "shop_id": 73,
	return fetch('/api/master/live/getLiveRoomGoodsList', parmas)
}

/* 创建订单 */
export const createOrder = (parmas) => {
	return fetch('/api/master/buy/createOrder', parmas)
}

/* 支付 */
export const payOrderApi = (parmas) => {
	return fetch('/api/master/unipay/prePayOrder', parmas)
}



/* 订单相关 */
/* 获取订单列表 */
export const orderListApi = (parmas) => {
	return fetch('/api/master/order/list', parmas, 'get')
}
/* 取消未完成订单 */
export const cacalOrder = (parmas) => {
	return fetch('/api/master/order/cancel', parmas)
}





/* 地址相关 */
/* 获取*/
/* 获取收获地址 */
export const getAddressList = (parmas) => {
	return fetch('/api/master/address/list', parmas, 'get')
}
/* 添加新地址 */
export const createAddress = (parmas) => {
	return fetch('/api/master/address/create', parmas)
}
/* 获取默认地址 */
export const addressDefault = (parmas) => {
	return fetch('/api/master/address/default', parmas, 'get')
}
