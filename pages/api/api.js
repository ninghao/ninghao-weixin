// pages/api/api.js
Page({
  data: {
  },

  tapHandler(event) {
    // wx.setStorage({
    //   key: 'name',
    //   data: 'ninghao.net',
    //   success: this.hello
    // })

    // wx.removeStorage({
    //   key: 'name',
    //   success() {
    //     wx.getStorageInfo({
    //       success(response) {
    //         console.log(response)
    //       }
    //     })
    //   }
    // })

    wx.clearStorageSync()
    wx.getStorageInfo({
      success(response) {
        console.log(response)
      }
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
