// wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [
      'https://raw.githubusercontent.com/ninghao/ninghao-images/master/weixin/app/demo-1.jpg',
      'https://raw.githubusercontent.com/ninghao/ninghao-images/master/weixin/app/demo-2.jpg',
      'https://raw.githubusercontent.com/ninghao/ninghao-images/master/weixin/app/demo-3.jpg',
    ]
  },

  setScrollView(event) {
    this.setData({
      currentView: event.target.dataset.view
    })
  },

  tapHandler(event) {
    console.log(event)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
