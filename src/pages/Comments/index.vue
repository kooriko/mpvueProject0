<template>
    <div class="comment-container" v-if="comments.length">
        <comment
            v-for="(comment, index) in comments"
            :comment="comment.comment"
            :dish="comment.dish"
            :key="index">
        </comment>
    </div>
    <div class="comment-container--no-data" v-else>
        暂无商品评价哟
    </div>
</template>

<script>
import comment from '@/components/comment'

const result = [
    {
        comment: {
            tel: '18500241855',
            avatar: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D180%2C140%2C50/sign=f8f8ea635dda81cb4eb3d08d345be12e/f11f3a292df5e0feccb38b96506034a85fdf72f9.jpg',
            createTime: 1533994979043,
            comment: '辣辣的！非常好吃！下次还买'
        },
        dish: {
            id: 100,
            name: '黄金菇炒肘子肉',
            img: 'https://s1.st.meishij.net/r/106/232/3995606/s3995606_153276690671843.jpg',
            detail: '真香，且香而不腻',
            order: 88,
            price: 23,
            quantity: 2
        }
    },
    {
        comment: {
            tel: '18500241855',
            avatar: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D180%2C140%2C50/sign=f8f8ea635dda81cb4eb3d08d345be12e/f11f3a292df5e0feccb38b96506034a85fdf72f9.jpg',
            createTime: 1533994979043,
            comment: '感觉还挺不错的，味道很香，就是太他妈辣了，每次都说少加点🌶，就是他娘的不知道！？下次不来了！差评！'
        },
        dish: {
            id: 200,
            name: '豆豉煎辣椒',
            img: 'https://s1.st.meishij.net/r/216/197/6174466/s6174466_153257066516315.jpg',
            detail: '无辣不欢的小伙伴们，夏天不要错过这道菜哦！开胃又下饭，比吃肉还过瘾',
            order: 120,
            price: 16,
            quantity: 1
        }
    }
]
export default {
    data () {
        return {
            comments: []
        }
    },

    components: {
        comment
    },

    methods: {
        async getComments () {
            this.comments = result
        }
    },
    onShow () {
        this.getComments()
    }
}
</script>

<style lang="scss" scoped>
.comment-container--no-data {
    text-align: center;
}

</style>
