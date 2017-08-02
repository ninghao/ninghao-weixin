App({
  onLaunch(options) {
    console.log('初始化')
    console.log(options)
  },
  onShow(options) {
    console.log('显示')
    console.log(options)
  },
  onHide() {
    console.log('隐藏')
  },
  onError(error) {
    console.log(error)
  }
})
