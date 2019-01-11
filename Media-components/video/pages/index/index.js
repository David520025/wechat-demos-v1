function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length === 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  onReady() {
  this.videoContext1 = wx.createVideoContext('miVideo'),
    this.videoContext = wx.createVideoContext('myVideo')

  },

  inputValue: '',

  data: {
    src: '',
    danmuList:
      [{
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      }, {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }]
  },

  // 输入赋值
  bindInputBlur(e) {
    console.log(e)
    
    this.inputValue = e.detail.value
  },
  
  // 获取值并发射弹幕
  bindSendDanmu() {
    this.videoContext1.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    }),
      this.videoContext.sendDanmu({
        text: this.inputValue,
        color: getRandomColor()
      })
  
  },


  videoErrorCallback(e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  }
})
