const app = getApp()
let _this;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.chooseMessageFile({
      count: 10,
      type: 'image',
      success (res) {
        // tempFilePath可以作为 img 标签的 src 属性显示图片
        const tempFilePaths = res.tempFiles
      }
    })
    _this = this
    console.log(app.com.webSrc+'?wx_id='+wx.getStorageSync("user").id)
    _this.setData({
      url: app.com.webSrc+'?wx_id='+wx.getStorageSync("user").id
    })
  },

})