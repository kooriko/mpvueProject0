<template>
    <transition name="slide-in">
        <div v-if="isShow" class="dialog">
            <slot/>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'dialog',
    props: { isShow: Boolean },
    mounted () {
        console.log(this.props.isShow)
    }

}
</script>

<style lang="scss" scoped>
.dialog {
    position: fixed;
    bottom: 0;
}
.slide-in-enter-active, .slide-in-enter-active {
    transition: all .3s;
}
.slide-in-enter, .slide-in-leave-to {
    transform: translateY(-100%);
}
</style>
