<template>
        <div>
            <el-row>
            store 中的姓名：{{this.$store.state.name}}
            </el-row>
            <el-row>
            <button @click="changeLisiAsync">不带参数设置李四</button>
            </el-row>
            <el-row>
            <el-input v-model="name" placeholder="请输入姓名"></el-input>
            </el-row>
            <button @click="setNameAsync">带参数设置</button>

        </div>

</template>

<script>

    export default {
        name: "router4-1",
        data() {
            return {
                name: ''
            }
        },
        mounted() {
        },
        computed:{

        },
        methods: {
            //实时改变值 无参
            changeLisi() {
                this.$store.commit('changeNameToZhangsan');
            },
            //实时改变值 带参
            setName() {
                this.$store.commit({
                        type: 'changeNameWithParam',
                        name: this.name
                    }
                );
            },
            //异步改变值 无参
            changeLisiAsync() {
                this.$store.dispatch('changeNameAsync');
            },
            //异步改变值 带参
            setNameAsync() {
                this.$store.dispatch({
                        type: 'changeNameWithParamAsync',
                        name: this.name
                    }
                );
            }
        }
    }
</script>

<style scoped>

</style>