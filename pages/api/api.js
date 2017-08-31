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
  },

  preview(event) {
    wx.previewImage({
      current: event.target.dataset.src,
      urls: this.data.images
    })
  }
})
