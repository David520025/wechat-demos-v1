Page({
  onShareAppMessage() {
    return {
      title: 'camera',
      path: '/index/index'
    }
  },

  data: {
    result: {}
  },
  onReady() {
    wx.showModal({
      title: '提示',
      content: '将摄像头对准一维码即可扫描',
      showCancel: false
    })
  },

  scanCode(e) {
    console.log('scanCode:', e)
    this.setData({
      result: e.detail
    })
  },
})
