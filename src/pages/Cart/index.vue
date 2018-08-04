<template>
    <div class="cart-page-container">
        <div class="cart-dish-list">
            <dish-select-card
                v-for="(dish, index) in orderList"
                :key="index"
                :dish="dish.dish"
                :defaultQuantity="dish.quantity"></dish-select-card>
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
            orderList: []
        }
    },
    components: { dishSelectCard },
    methods: {
    },

    mounted () {
        const dishQuantity = store.get('dishQuantity')
        this.orderList = Object.entries(dishQuantity).map(item => {
            console.log(item)
            return {
                dish: dishes.find(item[0]),
                quantity: item[1]
            }
        })
        console.log(this.orderList)
    }
}
</script>

<style scoped>
.cart-dish-list {
    padding: 0 20rpx;
    background-color: #FFF;
}

</style>
