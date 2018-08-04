<template>
    <div class="dish-card-container">
        <div class="dish-card-img" :style="'background-image: url(' + dish.img + ')'"></div>
        <div class="dish-card-right">
            <div class="dish-card-top">
                <div class="dish-card-title">{{ dish.name }}</div>
            </div>
            <div class="dish-card-detail f-tiny">
                <div class="text-ellipsis">{{ dish.detail }}</div>
                <div class="dish-card-order-number f-tiny c-secondary">月售{{ dish.order }}份</div>
            </div>

            <div class="dish-card-foot">
                <span class="dish-card-price">
                    <span class="f-small c-price">
                        ￥
                    </span>
                    <span class="f-large c-price">
                        {{ dish.price }}
                    </span>
                </span>

                <span v-if="!dish.quantity" class="dish-card-option">
                    <span class="quantity-button--plus c-white" @click="changeQuantity(1)">+</span>
                </span>
                <span v-else-if="dish.quantity" class="dish-card-option">
                    <span class="quantity-button--minus c-price" @click="changeQuantity(-1)">-</span>
                    <span class="quantity">{{ dish.quantity }}</span>
                    <span class="quantity-button--plus c-white" @click="changeQuantity(1)">+</span>
                </span>
                <span v-else class="dish-card-option is-select">选品类</span>
            </div>
        </div>
    </div>
</template>

<script>
import store from '@/libs/store'

export default {
    name: 'dishCard',
    props: {
        dish: Object
    },
    methods: {
        changeQuantity (num) {
            this.$emit('quantityChange', num)
        }
    },
}
</script>

<style lang="scss" scoped>
.dish-card-container {
    position: relative;
    display: flex;
    box-shadow: 6rpx 6rpx 16rpx rgba(0, 0, 0, .16);
    border-radius: 6rpx;

    &:not(:last-child) {
        margin-bottom: 20rpx;
    }

    .dish-card-img {
        width: 170rpx;
        height: 170rpx;
        flex-shrink: 0;
        background-position: 50%;
        background-size: cover;
    }
    .dish-card-right {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        padding: 15rpx;

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
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-grow: 0;
        }
    }
}
.dish-card-option {
    margin-right: 20rpx;
}
.dish-card-option {
    flex-shrink: 0;
}
[class*=quantity-button] {
    display: inline-block;
    text-align: center;
    line-height: 30rpx;
    border: 1px solid #D02930;
    width: 35rpx;
    height: 35rpx;
    border-radius: 50%;
}
.quantity-button--plus {
    background-image: linear-gradient(to right, #D22B31, #EF433C);
}
.quantity {
    width: 70rpx;
    text-align: center;
    display: inline-block;
}
</style>
