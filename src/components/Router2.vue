<template>
    <div>

        router2的内容{{id}}

    </div>
</template>

<script>
    export default {
        name: "Router2",
        data(){
            return {
                id:'',
                test:'122434'
            }
        },
        mounted(){
            console.log(this.$route.query.id)       //页面控制台输出结果是1357
            this.id = this.$route.query.id
        }
    }
</script>

<style scoped>

</style>