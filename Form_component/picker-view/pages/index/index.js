const date = new Date()
const years = []
const months = []
const days = []

// data.getFullYear() 获得一个当前表示四位数的年份
for (let i = 1930; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

Page({
  data: {
    years,
    year: date.getFullYear(),
    months,
    month: 2,
    days,
    day: 31,
    value: [25, 1, 1],
  },

  // 通过句柄给year month data同步数据
  bindChange(e) {
    const val = e.detail.value
    console.log(e)
    
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  }
})