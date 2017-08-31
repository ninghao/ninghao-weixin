// pages/api/api.js
Page({
  data: {
    images: []
  },

  tapHandler(event) {
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (response) => {
        console.log(response)
        this.setData({
          images: response.tempFilePaths
        })
      }
    })
  }
})
