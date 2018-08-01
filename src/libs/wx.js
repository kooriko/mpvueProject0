export default new Promise(resolve => {
    wx.login({
        success () {
            resolve({
                getUserInfo () {
                    return new Promise(resolve => {
                        wx.getUserInfo({
                            success: res => {
                                resolve(res)
                            }
                        })
                    })
                }
            })
        }
    })
})
