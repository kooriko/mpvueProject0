<template>
    <div class="home-page-container">
        <div class="home-banner img" :style="'background-image: url(' + bannerImg + ')'">
            <div class="banner-location-tip c-white">
                <!-- <img src="" alt=""> -->
                {{ locationTip }}
            </div>
            <div class="banner-notice">
                <!-- <img src="" alt=""> -->
                <span class="text-ellipsis f-small">从今日起，凡麦谷新老会员，在麦谷APP上订餐，可免费配送！</span>
            </div>
        </div>
        <div class="tabs">
            <div :class="[ 'tab', activeIndex === 0 ? 'is-active' : ''  ]">销量为王</div>
            <div :class="[ 'tab', activeIndex === 1 ? 'is-active' : ''  ]">价格优先</div>
        </div>
    </div>
</template>

<script>
import card from '@/components/card'
import tabs from '@/components/tabs'
import tab from '@/components/tab'

import wxp from '@/libs/wxp'

export default {
    data () {
        return {
            locationTip: wx.getStorageSync('location'),
            activeIndex: 0,
            bannerImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533375012620&di=83436220cb8854f527c6495351d0ab3e&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2F00%2F04%2F27%2F49%2F80bb0f440cd934b893bbcf3e07bc096a.jpg'
        }
    },
    components: { tabs, tab },
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
    mounted () {
        console.log(this.locationTip)
    }
}
</script>

<style lang="scss" scoped>
.home-banner {
    position: relative;
    height: 25vh;
    .banner-location-tip {

    }
}

</style>
