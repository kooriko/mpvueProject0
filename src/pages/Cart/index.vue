<template>
    <div class="cart-page-container">
        <div class="cart-dish-list" v-if="orderList.length">
            <dish-select-card
                v-for="(dish, index) in orderList"
                :key="index"
                :dish="dish"
                @quantityChange="quantityChange(dish.id, $event)"></dish-select-card>
        </div>
        <div v-else class="cart-dish-list--no-order">

            <!-- <img src="" alt=""> -->
            <div>天了个噜，购物车竟然是空的</div>
        </div>
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
        }
    },
    methods: {
        quantityChange (dishId, num) {
            const dishList = JSON.parse(JSON.stringify(this.dishList))
            dishList.find(dish => dish.id === dishId).quantity += num

            store.set('dishList', dishList)
            this.dishList = dishList
        }
    },

    onShow () {
        this.dishList = store.get('dishList')
    }
}
</script>

<style lang="scss">
.cart-dish-list {
    padding: 0 20rpx;
    background-color: #FFF;

    &--no-order {
        text-align: center;
    }
}

</style>
