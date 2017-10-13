// pages/api/api.js
Page({
  data: {
  },

  tapHandler(event) {
    wx.setStorage({
      key: 'name',
      data: 'ninghao.net',
      success: this.hello
    })
  },

  hello() {
    wx.getStorage({
      key: 'name',
      success(response) {
        console.log('hello ~ ', response.data)
      }
    })
  }
})
