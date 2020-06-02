export const toast = (title, ms = 2000) => {
	uni.showToast({
		icon: "none",
		title,
		duration: ms,
	})
}