// pages/api/api.js
Page({
  data: {

  },

  tapHandler(event) {
    wx.request({
      url: 'https://sandbox.ninghao.net',
      success: (response) => {
        console.log(response)
      }
    })
  }
})
