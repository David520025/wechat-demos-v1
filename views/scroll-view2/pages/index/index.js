const order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    // 设置哪个方向可滚动，则在哪个方向滚动到该元素
    toView: 'red',
    scrollTop: 20
  },
  upper(e) {
    console.log(e)
  },
  lower(e) {
    console.log(e)
  },
  scroll(e) {
    console.log(e)
  },

  tap(e) {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  
  tapMove(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})