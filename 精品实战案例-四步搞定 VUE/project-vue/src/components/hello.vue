<template>
    <div>
        hello
        <p>{{n}}</p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                n:this.$store.state.count//n的初始值从vuex的state中拿
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>