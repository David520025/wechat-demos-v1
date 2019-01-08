Page({
  data: {
    imgUrls: [
      '../../tupian/01.jpg',
      '../../tupian/123.jpg',
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },

    // 对 ！ 的使用
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  // 对 ！ 的使用
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  
  // this.setData 更换数据 及参数的使用
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})