<template>
    <div class="me-container">
        <div class="me-top bg-price c-white">
            <div class="avatar" :style="'background-image: url(' + userInfo.avatarUrl + ')'">
                <div class="menber-sign"></div>
            </div>
            <div class="top-right">
                <div class="tel">13683215548</div>
                <div class="sign f-tiny">尊贵会员</div>
            </div>
        </div>
        <div class="me-tabs bg-white">
            <div class="me-tab" @click="toPage('Comments')">
                <div class="icon"></div>
                <div class="title">我的评价</div>
            </div>
            <div class="me-tab" @click="toPage('Address')">
                <div class="icon"></div>
                <div class="title">我的地址</div>
            </div>
            <div class="me-tab">
                <div class="icon"></div>
                <div class="title">麦谷大使</div>
            </div>
        </div>
        <button class="logout-button bg-white f-normal c-price" @click="logout">
            退出登录
        </button>
    </div>
</template>

<script>
import card from '@/components/card'
import wxp from '@/libs/wxp'

export default {
    data () {
        return {
            userInfo: {}
        }
    },
    methods: {
        logout () {
            // NB logout
            console.log(`logout`)
            wx.redirectTo({ url: '../Home/main' })
        },
        toPage (page) {
            wx.redirectTo({ url: '../' + page + '/main' })
        }
    },
    async onShow () {
        const { userInfo } = await this.$wx.getUserInfo()
        this.userInfo = userInfo
        console.log(userInfo)
    }
}
</script>

<style lang="scss" scoped>
.me-top {
    padding: 50rpx 30rpx;
    display: flex;
}
.menber-sign {
    position: absolute;
    right: -20rpx; top: -10rpx;
    width: 40rpx; height: 50rpx;
    margin-right: 20rpx;
    background-color: #fbd85f;
}
.sign {
    display: inline-block;
    margin-top: 20rpx;
    border: 3rpx solid #FFF;
    padding: 5rpx 20rpx;
    border-radius: 30rpx;
}
.avatar {
    position: relative;
    width: 125rpx; height: 125rpx;
    border-radius: 50%;
    margin-right: 20rpx;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
}
.me-tabs {
    display: flex;
    margin-bottom: 20rpx;

    .me-tab {
        padding: 30rpx 0 20rpx;
        display: flex;
        flex-grow: 1;
        justify-content: center;
    }
    .icon {
        margin-bottom: 20rpx;
    }
}
</style>
