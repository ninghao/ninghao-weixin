Page({
  pay () {
    /**
     * 请求登录凭证。
     */
    wx.login({
      success: (loginResponse) => {
        /**
         * 请求支付参数。
         */
        wx.request({
          url: 'https://sandbox.ninghao.net/checkout/pay',
          method: 'POST',
          data: {
            code: loginResponse.code
          },
          success: (paramsResponse) => {
            console.log(paramsResponse)
            const params = paramsResponse.data

            /**
             * 请求支付。
             */
            wx.requestPayment({
              ...params,
              success: (paymentResponse) => {
                if (paymentResponse.errMsg === 'requestPayment:ok') {
                  wx.showToast({
                    title: '支付成功',
                    icon: 'success',
                    duration: 2000
                  })

                  setTimeout(() => {
                    wx.switchTab({
                      url: '/pages/index/index'
                    })
                  }, 2000)
                }
              }
            })
          }
        })
      }
    })
  }
})
