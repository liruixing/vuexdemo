<template>
    <div>
        Route1
        props传值为{{id}}
    </div>
</template>

<script>
    export default {
        name: "Router1",
        props:['id'],//接收动态路由的值
        data(){
            return{

            }
        },
        mounted(){
            console.log(this.$route.params.id)      //页面控制台输出结果是9527
        }
    }
</script>

<style scoped>

</style>