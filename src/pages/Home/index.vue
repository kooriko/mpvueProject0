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
            <div class="dish-container">
                <dish-select-card
                    v-for="(dish, index) in dishList"
                    :key="index"
                    :dish="dish"></dish-select-card>
            </div>
        </div>
        <div class="home-cart c-white" @click="toCartPage">
            <!-- <img src="" alt=""> -->
            <div class="badge c-white f-tiny">{{ totalQuantity }}</div>
        </div>
    </div>
</template>

<script>
import card from '@/components/card'
import dishSelectCard from '@/components/dishSelectCard'

import store from '@/libs/store'
import wxp from '@/libs/wxp'

const dishList = [
    {
        id: 100,
        name: '黄金菇炒肘子肉',
        img: 'https://s1.st.meishij.net/r/106/232/3995606/s3995606_153276690671843.jpg',
        detail: '真香，且香而不腻',
        order: 88,
        price: 23
    },
    {
        id: 200,
        name: '豆豉煎辣椒',
        img: 'https://s1.st.meishij.net/r/216/197/6174466/s6174466_153257066516315.jpg',
        detail: '无辣不欢的小伙伴们，夏天不要错过这道菜哦！开胃又下饭，比吃肉还过瘾',
        order: 120,
        price: 16
    },
    {
        id: 300,
        name: '酱汁鸡排红烩饭',
        img: 'http://images.meishij.net/p/20150108/83fdd6a11e1176b98de81595e979f2ce.jpg',
        detail: '鸡腿提前腌制过，好吃到停不下来！',
        order: 152,
        price: 17
    }
]

export default {
    components: { dishSelectCard },
    data () {
        return {
            locationTip: wx.getStorageSync('location'),
            activeIndex: 0,
            bannerImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533375012620&di=83436220cb8854f527c6495351d0ab3e&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2F00%2F04%2F27%2F49%2F80bb0f440cd934b893bbcf3e07bc096a.jpg',
            dishList,
            totalQuantity: 0
        }
    },
    methods: {
        tabChange (index) {
            this.activeIndex = index
        },
        toCartPage () {
            const url = '../Cart/main'
            wx.navigateTo({ url })
        }
    },
    mounted () {
        store.subscribe('dishQuantityChange', dishQuantity => {
            this.totalQuantity = Object.values(dishQuantity).reduce((total, quantity) => (total += quantity), 0)
        })
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
    height: 100%;
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
.home-cart {
    position: fixed;
    left: 50rpx; bottom: 50rpx;
    width: 90rpx; height: 90rpx;
    background-image: linear-gradient(to bottom, #F0443C, #D12A30);
    border-radius: 50%;
    .badge {
        position: absolute;
        top: 0; right: -6rpx;
        height: 28rpx; width: 28rpx;
        background: #EE2F2B;
        border-radius: 50%;
        border: 2rpx solid #FFF;
        text-align: center;
    }
}
.dish-container {
    margin: 15rpx 20rpx;
}
</style>
