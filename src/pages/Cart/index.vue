<template>
    <div class="container">
        Location Page
    </div>
</template>

<script>
import card from '@/components/card'
import wxp from '@/libs/wxp'

export default {
    data () {
        return {
            motto: 'Hello World',
            userInfo: {}
        }
    },

    components: {
        card
    },

    methods: {
        bindViewTap () {
            const url = '../logs/main'
            wx.navigateTo({ url })
        },
        async getUserInfo () {
            const { userInfo } = await (await wxp).getUserInfo()
            this.userInfo = userInfo
        },
        clickHandle (msg, ev) {
            console.log('clickHandle:', msg, ev)
        }
    }
}
</script>

<style scoped>
.userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.userinfo-avatar {
    width: 128rpx;
    height: 128rpx;
    margin: 20rpx;
    border-radius: 50%;
}

.userinfo-nickname {
    color: #aaa;
}

.usermotto {
    margin-top: 150px;
}

.form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
}

</style>
