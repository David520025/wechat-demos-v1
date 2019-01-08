//  定义了一个变量和一个空数组
const initData = 'this is first line\nthis is second line'
const extraLine = []

// 两个函数使用了关于数组的方法 push pop
Page({
  data: {
    text: initData
  },
  add(e) {
    extraLine.push('other line')
    this.setData({
      text: initData + '\n' + extraLine.join('\n')
    })
  },
  remove(e) {
    if (extraLine.length > 0) {
      extraLine.pop()
      this.setData({
        text: initData + '\n' + extraLine.join('\n')
      })
    }
  }
})