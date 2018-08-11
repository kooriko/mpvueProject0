<template>
    <div class="sign-up-page-container" v-if="!step">
        <div class="division">
            <div class="field">
                <div class="field-left">姓名</div>
                <div class="filed-right">
                    <input type="text" v-model="form.name" placeholder="请输入姓名">
                </div>
            </div>
            <div class="field">
                <div class="field-left">性别</div>
                <div class="filed-right">
                    <input type="text" v-model="form.gender" placeholder="请输入性别">

                </div>
            </div>
            <div class="field">
                <div class="field-left">学号</div>
                <div class="filed-right">
                    <input type="text" v-model="form.studentId" placeholder="请输入学号">
                </div>
            </div>
            <div class="field">
                <div class="field-left">出生日期</div>
                <div class="filed-right">
                    <input type="text" v-model="form.birthday" placeholder="请选择年月日">
                </div>
            </div>
        </div>

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

        <button class="btn type--primary next-btn" @click="next">下一步</button>
        <div :class="['message', 'c-white', isShow ? 'is-show' : '' ]" @transitionend="TransitionEndHandle">
            {{ message }}
        </div>
    </div>
    <div class="sign-up-page-container" v-else>
        <div class="menber-card" :style="'background-image: url(' + cardImage + ')'">
            <div class="menber-header">
                <div class="menber-avatar" :style="'background-image: url(' + userInfo.avatarUrl + ')'"></div>
                <div class="menber-name">{{ userInfo.nickName }}</div>
            </div>
            <span class="menber-footer"></span>
        </div>
        <div class="footer bg-white">
            <div class="total-price">
                <span class="f-large total-price-text">总价</span>
                <span class="f-small c-price">￥</span>
                <span class="f-large c-price">99</span>
            </div>
            <div class="footer-right c-white bg-price">确认支付</div>
        </div>
    </div>

</template>

<script>
import cardImage from '@/images/menber-card@3x.png'

export default {
    data () {
        return {
            step: 0,
            form: {
                name: '',
                gender: '',
                studentId: '',
                birthday: '',
                tel: '',
                verification: ''
            },
            userInfo: {},
            message: '',
            isShow: false
        }
    },
    computed: {
        cardImage () {
            return cardImage
        }
    },
    methods: {
        sendVerification () {
            console.log(this.form.tel)
        },
        next () {
            const { status, message } = this.validate()
            if (!status) {
                this.isShow = true
                this.message = message
            } else {
                this.step++
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
    },
    async mounted () {
        this.userInfo = (await this.$wx.getUserInfo()).userInfo
        console.log(this.userInfo)
    }
}
</script>

<style lang="scss" scoped>
input {
    display: inline-block;
    padding: 20rpx 0;
}
.sign-up-page-container {
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
.menber-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50rpx;
    box-sizing: border-box;
    width: 90vw;
    height: 31.5vh;
    margin: 0 auto;
    border-radius: 10rpx;
    color: #FFF;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    .menber-header {
        display: flex;
        align-items: center;

        .menber-avatar {
            width: 85rpx;
            height: 85rpx;
            border-radius: 50%;
            margin-right: 20rpx;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-size: cover;
        }
    }
}
.footer {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    display: flex;
    justify-content: space-between;
    padding-left: 30rpx;

    .footer-right {
        padding: 30rpx;
    }
    .total-price {
        display: flex;
        align-items: center;
    }
}
</style>
