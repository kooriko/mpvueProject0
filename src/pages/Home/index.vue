<template>
    <div class="home-page-container">
        <div class="home-banner img" :style="'background-image: url(' + bannerImg + ')'">
            <div class="banner-location-tip c-white">
                <!-- <img src="" alt=""> -->
                {{ locationTip }}
            </div>
            <div class="banner-notice">
                <!-- <img src="" alt=""> -->
                <span class="text-ellipsis f-tiny">从今日起，凡麦谷新老会员，在麦谷APP上订餐，可免费配送！</span>
            </div>
        </div>
        <div class="home-main">
            <div class="tabs">
                <div :class="[ 'tab', activeIndex === 0 ? 'is-active' : ''  ]" @click="tabChange(0)">销量为王</div>
                <div :class="[ 'tab', activeIndex === 1 ? 'is-active' : ''  ]" @click="tabChange(1)">价格优先</div>
            </div>
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
        tabChange (index) {
            this.activeIndex = index
        }
    }
}
</script>

<style lang="scss" scoped>
.home-banner {
    position: relative;
    height: 25vh;

    .banner-location-tip {
        position: absolute;
        top: 20rpx; left: 30rpx;
        padding: 10rpx 20rpx;
        background: rgba(0, 0, 0, .3);
        border-radius: 60rpx;
    }
    .banner-notice {
        position: absolute;
        bottom: -15rpx; left: 50%;
        transform: translateX(-50%);
        padding: 10rpx;
        width: 90%;
        line-height: 30rpx;
        border-radius: 40rpx;
        background-color: #FFF;
        box-shadow: 0 8rpx 15rpx rgba(0, 0, 0, .3);
    }
}
.home-main {
    margin-top: 20rpx;
    background-color: #FFF;

}


.tabs {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .tab {
        width: 25%;
        padding: 30rpx 0;
            text-align: center;

        &.is-active {
            position: relative;
            color: #D02930;

            &:after {
                content: '';
                position: absolute;
                bottom: 0; left: 0; right: 0;
                height: 6rpx;
                background: #D02930;
            }
        }
    }
}
</style>
