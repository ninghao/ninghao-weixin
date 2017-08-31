// pages/api/api.js
Page({
  data: {

  },

  tapHandler(event) {
    wx.request({
      url: 'https://sandbox.ninghao.net',
      method: 'POST',
      data: {
        message: 'hola ~'
      },
      success: (response) => {
        console.log(response)
      }
    })
  }
})
