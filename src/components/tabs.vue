<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
export default {
    mounted () {
        setTimeout(() => {
            console.log(`this.$slots`, this.$slots)
        })
    }
}
</script>

<style>

</style>
