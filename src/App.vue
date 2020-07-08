<template>
  <div id="app">
    <button @click="goDemo3">去demo3</button>
    <router-link to="/demo1/9527">demo1</router-link>
    <span>    </span>
    <router-link to="/demo2?id=1357">demo2</router-link>

    <router-link to="/demo4">  demo4  </router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
    goDemo3(){
      this.$router.push({name:"route3",params:{id:1234}})           //注意这里一定要使用别名，否则无法用动态路由传值
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
