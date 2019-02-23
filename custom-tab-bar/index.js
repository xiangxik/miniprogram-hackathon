Component({
  properties: {
    position: {
      type: String,
      value: 'bottom'
    },
    show: {
      type: Boolean,
      value: true
    },
    color: {
      type: String,
      value: '#707070'
    },
    selectedColor: {
      type: String,
      value: '3963BC'
    },
    borderStyle: {
      type: String,
      value: '#f6f6f6'
    },
    backgroundColor: {
      type: String,
      value: '#fff'
    },
    backgroundImg: {
      type: String,
      value: ''
    },
    fontSize: {
      type: Number,
      value: 24
    }, 
    list: {
      type: Array,
      value: [
        {
          pagePath: "/pages/vote/vote",
          iconPath: '/images/tab-icon/discover.png',
          selectedIconPath: '/images/tab-icon/discover_fill.png',
          text: "投票"
        }, {
          pagePath: "/pages/idea/publish",
          iconSize: 100,
          style: 'circle',
          iconPath: '/images/tab-icon/add.png',
          selectedIconPath: '/images/tab-icon/add.png',
          text: "发布想法"
        }, {
          pagePath: "/pages/me/me",
          iconPath: '/images/tab-icon/my.png',
          selectedIconPath: '/images/tab-icon/my_fill1.png',
          text: "我的"
        }
      ]
    }
  },
  data : {
    selected: 0
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    },
    show() {
      this.setData({
        show: true
      })
    },
    hide() {
      this.setData({
        show: false
      })
    },
    showItem(idx) {
      this.setData({
        selected: idx
      })
    },
    showRedDot(idx) {
      const redDot = `list[${idx}].redDot`
      this.setData({
        redDot: true
      })
    },
    hideRedDot(idx) {
      const redDot = `list[${idx}].redDot`
      this.setData({
        [redDot]: false
      })
    },
    setTabBarBadge(idx, text) {
      const badge = `list[${idx}].badge`
      this.setData({
        [badge]: text
      })
      console.log(badge)
    },
    removeTabBarBadge(idx) {
      const badge = `list[${idx}].badge`
      this.setData({
        [badge]: ''
      })
    }
  }
})