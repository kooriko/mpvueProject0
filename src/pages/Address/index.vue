<template>
    <div class="address-page-container">
        <address-item v-for="(addressItem, index) in addressList" :key="index" :address="addressItem"></address-item>
        <div class="address-plus">
            <div class="icon"></div>
            <span class="address-plus-text" @click="addAddress">新增收货地址</span>
        </div>
    </div>
</template>

<script>
import addressItem from '@/components/address'

const addressList = [
    {
        id: 1004,
        name: '韩娜',
        tel: 15101008791,
        address: '呼伦贝尔学院宿舍楼 八号楼 606 室'
    },
    {
        id: 1005,
        name: '淘小宝',
        tel: 136277910881,
        address: '呼伦贝尔学院宿舍楼 六号楼 710 室'
    }
]
export default {
    data () {
        return {
            addressList: [],

        }
    },
    components: { addressItem },
    methods: {
        async getAddressList () {
            const addressList = wx.getStorageSync('addresses')
            this.addressList = addressList
        },
        addAddress () {
            wx.redirectTo({ url: '../AddressEdit/main' })
        }
    },
    mounted () {
        // wx.setStorageSync('addresses', addressList)
        this.getAddressList()
    }
}
</script>

<style scoped>
.address-page-container {
    background-color: #FFF;
}
.address-plus {
    position: fixed;
    bottom: 0; left: 0; right: 0;
    text-align: center;
    padding: 20rpx;
    background-color: #FFF;
}
.address-plus-text {

}
</style>
