<template>
    <div class="comment-container">
        <div class="comment-top">
            <div class="comment-top-left">
                <div class="comment-avatar" :style="'background-image: url(' + comment.avatar + ')'"></div>
                <div class="comment-tel f-tiny c-secondary">{{ comment.tel }}</div>
            </div>
            <div class="comment-date f-tiny c-secondary">{{ formattedCreateTime }}</div>
        </div>
        <div class="comment-content f-beauty">{{ comment.comment }}</div>
        <div class="comment-pics">
            <div
                class="comment-pic"
                v-if="comment.pics.length"
                v-for="(pic, index) in comment.pics"
                :key="index"
                :style="'background-image: url(' + pic + ')'">
            </div>
        </div>
    </div>
</template>

<script>
import moment from '@/libs/moment'

export default {
    props: {
        comment: Object
    },
    computed: {
        formattedCreateTime () {
            return moment(this.comment.createTime).format(1)
        }
    },
    mounted () {
    }
}
</script>

<style lang="scss" scoped>
.comment-container {
    display: flex;
    flex-direction: column;
    padding: 20rpx;
    background-color: #FFF;
    margin-bottom: 20rpx;
}
.comment-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20rpx;

    .comment-top-left {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .comment-avatar {
        width: 70rpx;
        height: 70rpx;
        margin-right: 20rpx;
        border-radius: 50%;
        background-position: 50%;
        background-size: cover;
    }
}
</style>
