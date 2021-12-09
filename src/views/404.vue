<template>
  <div>
      <img src="~@/static/image/404.svg" />
  </div>
</template>

<script>
import { history_is404 } from '@/utils/util.js'
export default {
    name: 'notfound404',
    created(){
      // 解决history地址栏输入带来的问题
      if(history_is404(this.$store.getters.routes,this.$route.path)){
        this.$router.push(this.$route.path)
      }
    }
}
</script>

<style lang="scss" scoped>
img {
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 50%;
  width: 50%;
}
</style>