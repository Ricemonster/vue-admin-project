<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { Login } from './api/User'

export default {
  name: 'App',
  mounted(){
    console.log(this.$router)
    // Login()
    // .then(res => {
    //   console.log(res)
    // })
  }
}
</script>

<style lang="scss" scoped>
</style>
