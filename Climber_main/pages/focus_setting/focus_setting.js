// pages/setting2/setting2.js
Page({
    data: {
      boolnum:false,
    },
    hidden_tap(e) {
      this.setData({
        boolnum: e.detail.value
      })
      wx.setStorage({
        key: 'boolnum',
        data: e.detail.value
      })
    },
    onShow: function () {
      wx.setNavigationBarTitle({
        title: '设置'
      })
      this.setData({
        workTime: wx.getStorageSync('workTime'),
        boolnum:wx.getStorageSync('boolnum')
      })
    },
    onLoad: function(){
      this.setData({
        boolnum:wx.getStorageSync("boolnum")
      })
    },
    changeWorkTime: function (e) {
      wx.setStorage({
        key: 'workTime',
        data: e.detail.value
      })
    },

  })
