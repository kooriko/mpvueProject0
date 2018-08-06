<template>
    <div class="sign-up-page-container">
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
    </div>
</template>

<script>
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
            }
        }
    },
    methods: {
        sendVerification () {
            console.log(this.form.tel)
        },
        next () {
            this.step++
        }
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
.field {
    position: relative;
    padding: 0 20rpx;
    display: flex;
    align-items: center;
    &:after {
        content: '';
        position: absolute;
        left: 0; right: 0; bottom: 0;
        height: 3rpx;
        background-color: #EEE;
    }
    .field-left {
        width: 200rpx;
    }
    .filed-right {
        flex-grow: 1;
        display: flex;
        align-items: stretch;
        border: none;
    }
}
.get-verification-btn {
    border-left: 1px solid #DCDCDC;
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
</style>
