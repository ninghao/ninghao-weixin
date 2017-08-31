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

        response.tempFilePaths.map((filePath) => {
          wx.uploadFile({
            url: 'https://sandbox.ninghao.net/api/uploads',
            filePath: filePath,
            name: 'uploads',
            success: (response) => {
              console.log(response)
            }
          })
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
