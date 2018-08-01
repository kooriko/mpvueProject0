<template>
    <div class="location-container">
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
  },

    created () {
        this.getUserInfo()
    }
}
</script>

<style scoped>
.container {

}
</style>
