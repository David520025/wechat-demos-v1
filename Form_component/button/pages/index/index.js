const types = ['default', 'primary', 'warn']
const pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },
  setDisabled(e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain(e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading(e) {
    this.setData({
      loading: !this.data.loading
    })
  },

  onGotUserInfo(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
  },
}


