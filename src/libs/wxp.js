export default new Promise(resolve => {
    wx.login({
        success () {
            resolve({
                getUserInfo () {
                    return new Promise(resolve => {
                        wx.getUserInfo({
                            success (res) {
                                resolve(res)
                            }
                        })
                    })
                },
                request (url, params) {
                    return new Promise(resolve => {
                        wx.request({
                            url,
                            params,
                            header: { 'Content-Type': 'application/json' },
                            success (res) {
                                resolve(res)
                            }
                        })
                    })
                }
            })
        }
    })
})
