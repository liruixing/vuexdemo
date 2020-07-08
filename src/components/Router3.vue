<template>
    <div>编程式导航页面 {{id}} </div>
</template>

<script>
    export default {
        name: "Router3",
        data(){
            return {
                id:''
            }
        },
        mounted(){
            console.log(this.$route.params.id)
            this.id = this.$route.params.id
            //console.log(this.$route.query.aid)
        }
    }

</script>

<style scoped>

</style>