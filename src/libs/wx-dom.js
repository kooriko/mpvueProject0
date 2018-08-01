import Vue from 'vue'
import wx from './wx'

export default view => {
    Vue.config.productionTip = false
    App.mpType = 'app'
    wx.then(data => {
        Object.entries(data).map(method => {
            Vue.prototype['$' + method[0]] = method[1]
        })
        const app = new Vue(view)
        app.$mount()
    })
}
