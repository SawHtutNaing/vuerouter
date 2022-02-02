<template>
    <div>
        <h1>this is from test {{name}}  </h1>
        <slot> i am slot from test.vue </slot>
    </div>
</template>

<script>
    export default {
        name:"test",
        props: {
            name: {
                type: String,
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>