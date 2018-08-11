<template>
    <div class="address-page-container">
        <div class="field">
            <div class="field-left">收货人</div>
            <div class="filed-right">
                <input type="text" v-model="form.name" placeholder="请输入姓名">
            </div>
        </div>
        <div class="field">
            <div class="field-left">收货地址</div>
            <div class="filed-right">
                <input type="text" v-model="form.address" placeholder="请输入收货地址">

            </div>
        </div>
        <div class="field">
            <div class="field-left">联系电话</div>
            <div class="filed-right">
                <input type="text" v-model="form.tel" placeholder="请输入联系电话">
            </div>
        </div>
        <button class="btn type--primary save-btn" @click="saveAddress">保存地址</button>
        <button class="btn save-btn" @click="() => { isShow = true }" v-if="status === 'edit'">删除地址</button>

        <div :class="[ 'dialog', isShow ? 'is-show' : '' ]" @click="() => { isShow = false }">
            <div class="dialog-title">
                确定要删除该地址
            </div>
            <button class="dialog-button c-price mb-20" @click="removeAddress">
                删除
            </button>
            <button class="dialog-button">
                取消
            </button>
        </div>
    </div>
</template>

<script>
import dialog from '@/components/dialog'
import store from '@/libs/store'

export default {
    data () {
        return {
            form: {
                name: '',
                address: '',
                tel: '',
                id: ''
            },
            status: 'new',
            isShow: false
        }
    },
    components: { dialog },
    methods: {
        saveAddress () {
            const addresses = wx.getStorageSync('addresses')
            if (this.status === 'edit') {
                const address = addresses.find(address => address.id === this.form.id)
                Object.assign(address, this.form)
            } else {
                const address = Object.assign({}, this.form, { id: Date.now() })
                if (!Object.values(address).every(field => field)) throw new Error(`请填写必填项`)
                addresses.push(address)
            }
            wx.setStorageSync('addresses', addresses)
            wx.redirectTo({ url: '../Address/main' })
        },
        removeAddress () {
            const addresses = wx.getStorageSync('addresses')
            const index = addresses.findIndex(address => address.id === this.form.id)
            addresses.splice(index, 1)
            wx.setStorageSync('addresses', addresses)
            wx.redirectTo({ url: '../Address/main' })
        }
    },
    mounted () {
        const address = store.get('address')
        if (address) {
            this.status = 'edit'
        } else {
            this.status = 'new'
        }
        Object.assign(this.form, address || { name: '', address: '', tel: '', id: '' })
        store.remove('address')

    }
}
</script>

<style lang="scss" scoped>
.address-page-container {
    background: #FFF;
    border-top: 1px solid #DCDCDC;
}

.field {
    padding: 20rpx;
}

.save-btn {
    margin: 30rpx 20rpx;
}

.dialog {
    position: fixed;
    z-index: 20;
    bottom: 0; left: 0; right: 0;
    text-align: center;
    background-color: #F6F6F9;
    transition: all .3s;
    transform: translateY(100%);

    &.is-show {
        transform: translateY(0);

        &:after {
            content: '';
            position: fixed;
            top: -9999px; left: 0; bottom: 100%; right: 0;
            background-color: rgba(0, 0, 0, .3);
        }
    }
    .dialog-title {
        padding: 20rpx;
    }
}
</style>
