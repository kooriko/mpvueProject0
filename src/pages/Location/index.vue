<template>
    <div class="location-container">
        <div class="notice c-theme">
            <span class="notice-content">定位不准的孩子木有饭吃，请准确选择您所在的高校</span>
            <div class="notice-after"></div>
        </div>
        <div class="select">
            <p class="select-notice f-small">请选择您所在的高校</p>
            <button class="btn" v-for="(item, index) in list" :key="index" @click="selectCollege(index)">
                {{ item.name }}
            </button>
        </div>
    </div>
</template>

<script>
import card from '@/components/card'
import pic from './img/pic0'

const list = [
    {
        name: '呼伦贝尔学院',
        value: ''
    },
    {
        name: '北华航天工业学院',
        value: ''
    }
]

export default {
    data () {
        return {
            list
        }
    },

    components: {
        card
    },

    methods: {
        selectCollege (index) {
            // this.$wx.request()
            const img = pic
            wx.setStorageSync('location', this.list[index].name)
            wx.navigateTo({ url: `../Home/main?id=40&img=${ img }&name=水煮肉片&detail=辣味十足特别美味&price=30&order=60` })

        }
    },
    mounted () {
        console.log(this.$wx)
    }
}
</script>

<style lang="scss" scoped>
$notice-height: 80rpx;
$notice-bc: #FDF8D8;

.notice {
    display: inline-block;
    position: relative;
    height: $notice-height;
    line-height: $notice-height;
    z-index: 100;
    background-color: $notice-bc;
    margin-bottom: 40rpx;

    .notice-content {
        position: relative;
        z-index: 100;
    }
    .notice-after {
        position: absolute;
        right: -($notice-height / 2); top: 0;
        height: $notice-height; width: $notice-height;
        border-radius: 50%;
        z-index: 10;
        background-color: $notice-bc;
    }
}
.select {
    margin: 0 30rpx;

    .select-notice {
        margin-bottom: 40rpx;
    }
    .btn {
        &:not(:last-child) {
            margin-bottom: 35rpx;
        }
    }
}
</style>
