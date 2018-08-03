import Vue from 'vue'
import App from './index'
import wxp from '@/libs/wxp'

wxp.then(wx => {
    Vue.prototype.$wx = wx
})

const app = new Vue(App)
app.$mount()
