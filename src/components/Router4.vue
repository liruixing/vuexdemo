<template>
    <div>
        <router-link to="/demo4/demo4-1">去子路由demo4-1</router-link>
        <router-link to="/demo4/demo4-2">去子路由demo4-2</router-link>
    <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Router4",
        data(){
            return{

            }
        },
        mounted(){
        }
    }
</script>

<style scoped>

</style>