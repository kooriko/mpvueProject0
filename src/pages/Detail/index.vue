<template>
    <div class="dish-container">
        <div class="division">
            <div class="dish-img" :style="'background-image: url(' + dish.img + ')'"></div>

            <div class="dish-detail">
                <span class="dish-name f-normal f-strong">{{ dish.name }}</span>
                <span class="dish-desc f-tiny">{{ dish.detail }}</span>
                <span class="dish-order f-tiny">月售{{ dish.order }}份</span>
                <div class="dish-block">
                    <span class="dish-price bc-theme f-large">￥{{ dish.price }}</span>
                    <span class="btn-cart f-tiny">加入购物车</span>
                </div>
            </div>
            <div class="dish-notice">
                <!-- <img src="" alt=""> -->
                <span class="f-tiny c-desc">包含原材料：辣椒，葱姜，牛肉片</span>
            </div>
        </div>

            <div class="comment-comment-num f-small">商品评价({{ 90 }})</div>
            <comment
                v-for="(comment, index) in comments"
                :comment="comment"
                :key="index">

            </comment>
    </div>
</template>

<script>
import card from '@/components/card'
import wxp from '@/libs/wxp'
import comment from '@/components/comment'

const comments = [
    {
        id: 1,
        tel: 18500241855,
        avatar: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D180%2C140%2C50/sign=f8f8ea635dda81cb4eb3d08d345be12e/f11f3a292df5e0feccb38b96506034a85fdf72f9.jpg',
        comment: '辣辣的！非常好吃！下次还买',
        createTime: 1533218323379
    },
    {
        id: 1,
        tel: 18500241855,
        avatar: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D180%2C140%2C50/sign=f8f8ea635dda81cb4eb3d08d345be12e/f11f3a292df5e0feccb38b96506034a85fdf72f9.jpg',
        comment: '辣辣的！非常好吃！下次还买',
        createTime: 1533218323379
    },
]
export default {
    components: { comment },
    data () {
        return {
            dish: {}
        }
    },
    methods: {
        async getDish () {
            const dishId = this.$root.$mp.query.id
            // const dish = await this.$wx.request({})
            // console.log(result)
            this.dish = this.$root.$mp.query
        }
    },
    computed: {
        comments () {
            return comments
        }
    },
    mounted () {
        this.getDish()
    }
}
</script>

<style lang="scss" scoped>
.dish-container {
    background-color: #F4F4F4;
    .division {
        padding: 0 30rpx;
        background-color: #FFF;
        margin-bottom: 25rpx;
    }
}
.dish-img {
    width: 100%;
    height: 400rpx;
    border-radius: 20rpx;
    background-size: cover;
    background-position: 50% 50%;
    margin-bottom: 20rpx;
}
.dish-detail {
    position: relative;
    padding-bottom: 30rpx;
    &:after {
        position: absolute;
        content: '';
        bottom: 0; left: 0; right: 0;
        height: 2rpx;
        background: #DCDCDC;
    }
    .dish-name, .dish-desc, .dish-order {
        display: block;
        margin-bottom: 10rpx;
    }
    .dish-block {
        margin-top: 20rpx;
        display: flex;
        justify-content: space-between;

        .btn-cart {
            border-radius: 60rpx;
            padding: 10rpx 20rpx;
            background: linear-gradient(to bottom, #F0443C, #D12A31);
            color: #FFF;
        }
    }
}
.dish-notice {
    padding: 20rpx 0;
}
.comment-comment-num {
    background-color: #FFF;
    padding: 0 30rpx;
    padding-top: 20rpx;
}
</style>
