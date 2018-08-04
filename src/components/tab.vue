<template>
    <div class="tab">
        {{ value }}
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: { value: String },
    mounted () {
        console.log(`this.props`, this.props)
    }
}
</script>

<style>

</style>
