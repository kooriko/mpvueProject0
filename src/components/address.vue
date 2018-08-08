<template>
    <div class="address-container" @click="editAddress">
        <div class="address-left">
            <div class="address-left-top">
                <div class="address-name">{{ address.name }}</div>
                <div class="address-tel">{{ address.tel }}</div>
            </div>
            <div class="address-left-bottom address-detail c-secondary">
                {{ address.address }}
            </div>
        </div>
        <div class="address-right">

        </div>
    </div>
</template>

<script>
import store from '@/libs/store'

export default {
    props: {
        address: Object
    },
    methods: {
        editAddress () {
            const address = Object.assign({}, this.address)
            store.set('address', address)
            wx.navigateTo({ url: `../AddressEdit/main` })
        }
    },
    mounted () {
    }
}
</script>

<style scoped lang="scss">
.address-container {
    padding: 20rpx 30rpx;
    &:not(:last-child) {
        border-bottom: 3rpx solid #DCDCDC;
    }
}
.address-left-top {
    display: flex;
    .address-name {
        width: 150rpx;
    }
}
</style>
