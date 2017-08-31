// pages/api/api.js
Page({
  data: {
    images: [],
    progress: []
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

        response.tempFilePaths.map((filePath, index) => {
          const uploadTask = wx.uploadFile({
            url: 'https://sandbox.ninghao.net/api/uploads',
            filePath: filePath,
            name: 'uploads',
            success: (response) => {
              console.log(response)
            }
          })

          uploadTask.onProgressUpdate((response) => {
            this.data.progress[index] = response.progress

            this.setData({
              progress: this.data.progress
            })
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
