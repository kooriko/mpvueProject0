<template>
    <div class="dish-card-container">
        <div class="dish-card-img" :style="'background-image: url(' + dish.img + ')'"></div>
        <div class="dish-card-right">
            <div class="dish-card-top">
                <div class="dish-card-title">{{ dish.name }}</div>
                <div class="dish-card-order-quantity f-beauty">x{{ dish.quantity }}</div>
            </div>
            <div class="dish-card-detail f-tiny">{{ dish.detail }}</div>
            <div class="dish-card-foot">
                <span class="f-small">
                    实付金额
                </span>
                <span class="f-small c-price">
                    ￥
                </span>
                <span class="f-large c-price">
                    {{ dish.price * dish.quantity }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dishCard',
    props: {
        dish: Object,
    },

}
</script>

<style lang="scss" scoped>
.dish-card-container {
    position: relative;
    display: flex;
    margin-top: 20rpx;
    padding-top: 20rpx;
    &:after {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 3rpx;
        background: #DCDCDC;
    }

    .dish-card-img {
        width: 170rpx;
        height: 170rpx;
        border-radius: 6rpx;
        margin-right: 20rpx;
        background-position: 50%;
        background-size: cover;
    }
    .dish-card-right {
        display: flex;
        flex-direction: column;
        flex-grow: 1;

        .dish-card-top {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-grow: 0;
        }
        .dish-card-detail {
            flex-grow: 1;
        }
        .dish-card-foot {
            flex-grow: 0;
        }

    }
}
</style>
