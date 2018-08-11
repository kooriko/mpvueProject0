<template>
    <div class="cart-page-container" v-if="orderList.length">
        <div class="division">
             <div class="cart-dish-list">
                 <div class="cart-dish-item" v-for="(dish, index) in orderList" :key="index">
                    <div :class="['checkbox', 'cart-dish-checkbox', dish.isChecked ? 'type--is-checked' : '']" @click="dishSelect(dish.id)"/>
                    <dish-select-card :dish="dish" @quantityChange="quantityChange(dish.id, $event)"></dish-select-card>
                 </div>
            </div>
            <div class="extra-fee f-tiny c-secondary">
                <div class="extra-fee-text">配送费</div>
                <div class="extra-fee-fee">￥6</div>
            </div>
        </div>

        <div class="division menber-info">
            <div class="menber-info-title">
                成为尊贵的麦谷会员，可为您优惠10元。
            </div>
            <div class="menber-info-detail f-tiny c-secondary">
                此处显示会员权益文案，烦请提炼关键卖点。
            </div>
            <!-- <img src="" alt=""> -->
        </div>

        <div class="cart-footer">
            <div class="footer-left">
                <span class="check-all" @click="() => { isCheckAll = !isCheckAll }">
                    <span :class="['checkbox', isCheckAll ? 'type--is-checked' : '']"></span>
                    <span class="check-all-text">全选</span>
                </span>
                <span class="total-price">
                    <span class="total-price-text f-large">总价</span>
                    <span class="price-mark f-tiny c-price">￥</span>
                    <span class="price c-price f-large">{{ totalPrice }}</span>
                </span>
            </div>

            <div class="footer-right">
                <div class="footer-right-option bg-black c-white">立即加入会员</div>
                <div class="footer-right-option bg-price c-white">去结算</div>
            </div>
        </div>
    </div>
     <div v-else class="cart-page-container--no-data">
        <!-- <img src="" alt=""> -->
        <div>天了个噜，购物车竟然是空的</div>
    </div>
</template>

<script>
import dishSelectCard from '@/components/dishSelectCard'

import store from '@/libs/store'
import dishes from '@/libs/dishes'
import wxp from '@/libs/wxp'

export default {
    data () {
        return {
            dishList: []
        }
    },
    components: { dishSelectCard },
    computed: {
        orderList () {
            return this.dishList.filter(dish => dish.quantity)
        },
        isCheckAll: {
            get () {
                return this.orderList.every(dish => dish.isChecked)
            },
            set (flag) {
                this.orderList.map(dish => dish.id).forEach(dishId => this.dishList.find(dish => dish.id === dishId).isChecked = flag)
            }
        },
        totalPrice () {
            return this.orderList.reduce((totalPrice, dish) => totalPrice += dish.price * dish.quantity, 0)
        }
    },
    methods: {
        quantityChange (dishId, num) {
            const dishList = JSON.parse(JSON.stringify(this.dishList))
            dishList.find(dish => dish.id === dishId).quantity += num

            store.set('dishList', dishList)
            this.dishList = dishList
        },
        dishSelect (dishId) {
            const dish = this.dishList.find(dish => dish.id === dishId)
            dish.isChecked = !dish.isChecked
        }
    },
    onShow () {
        this.dishList = store.get('dishList')
    }
}
</script>

<style lang="scss">
.cart-page-container--no-data {
    text-align: center;
}
.cart-dish-list {
    background-color: #FFF;
    margin-bottom: 30rpx;

    .cart-dish-item {
        display: flex;
        align-items: center;

        .cart-dish-checkbox {
            flex-shrink: 0;
            margin-right: 20rpx;
        }
    }
}
.division {
    padding: 30rpx;
    background-color: #FFF;
    margin-bottom: 30rpx;
}
.extra-fee {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-top: 30rpx;

    &:after {
        content: '';
        position: absolute;
        left: 0; right: 0; top: 0;
        height: 1rpx;
        background-color: #DCDCDC;
    }
}
.cart-footer {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0; left: 0; right: 0;
    background-color: #FFF;

    .footer-left {
        display: flex;
        padding: 30rpx;
        align-items: center;
        .check-all {
            margin-right: 20rpx;
            display: inline-flex;
            align-items: center;

            .check-all-text {
                margin-left: 20rpx;
            }
        }
        .total-price {
            margin-left: 20rpx;
            display: inline-flex;
            align-items: center;
        }
    }

    .footer-right {
        display: flex;
        align-items: stretch;
        flex-grow: 1;
        .footer-right-option  {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>
