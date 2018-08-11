<template>
    <div class="sign-in-page-container" v-if="!step">
        <div class="division">
             <div class="field">
                <div class="field-left">手机号码</div>
                <div class="filed-right">
                    <input type="text" v-model="form.tel" placeholder="请填写手机号码">
                    <div class="get-verification-btn" @click="sendVerification">获取验证码</div>
                </div>
            </div>
             <div class="field">
                <div class="field-left">验证码</div>
                <div class="filed-right">
                    <input type="text" v-model="form.verification" placeholder="输入验证码">
                </div>
            </div>
        </div>

        <button class="btn type--primary next-btn" @click="signin">登录</button>

        <div :class="['message', 'c-white', isShow ? 'is-show' : '' ]" @transitionend="TransitionEndHandle">
            {{ message }}
        </div>
    </div>
</template>

<script>
import cardImage from '@/images/menber-card@3x.png'

export default {
    data () {
        return {
            form: {
                tel: '',
                verification: ''
            },
            isShow: false,
            message: '请输入正确的验证码'
        }
    },
    methods: {
        sendVerification () {
            console.log(this.form.tel)
        },
        async signin () {
            const { status, message } = this.validate()
            if (!status) {
                this.isShow = true
                this.message = message
            } else {
                wx.redirectTo({ url: '../Home/main' })
            }
        },
        async validate () {
            if (!(/^\d{13}$/.test(form.tel))) {
                return {
                    status: false,
                    message: '请输入正确的手机号'
                }
            }
            // if () {

            // }
        },
        TransitionEndHandle () {
            setTimeout(() => {
                this.isShow = false
            }, 2000)
        }
    }
}
</script>

<style lang="scss" scoped>
input {
    display: inline-block;
    padding: 20rpx 0;
}
.sign-in-page-container {
    padding: 20rpx 0;
    .division {
        background-color: #FFF;
    }
}

.get-verification-btn {
    border-left: 1px solid #EEE;
    display: flex;
    align-items: center;
    padding-left: 20rpx;
    color: #26AB28;
}
.next-btn {
    margin-top: 60rpx;
    width: 90%;
    border-radius: 60rpx;
}
.message {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300rpx; height: 300rpx;
    border-radius: 50rpx;
    background-color: rgba(0, 0, 0, .3);
    opacity: 0;
    transition: all .3s;
    &.is-show {
        opacity: 1;
    }
}
</style>
