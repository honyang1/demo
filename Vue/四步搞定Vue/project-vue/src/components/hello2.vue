<template>
    <div>
        hello
        <p>{{n}}</p>
        <p>{{m}}</p>
        <button @click="changCont()">改变状态</button>
    </div>
</template>

<script>
    export default {
        //只能在本组件被改变
        data(){
            return {
                n:this.$store.state.count//n的初始值从vuex的state中拿
            }
        },
        methods: {
            changCont() {
                this.$store.commit('updateCount',{add:5})
            }
        },
        computed: {
            m() {
                return this.$store.state.count
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>