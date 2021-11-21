<template>
  <div class="container">
    
  </div>
</template>

<script>
export default {
    props: {
      type: Array,
      required: true,
      default: function(){
        return [{
          path: '/',
          name: 'home',
          meta: {
              title: '导航页',
              icon: 'home'
          },
          component: () => import ('@/views/home.vue')
        }]
      }
    }
}
</script>

<style lang="scss" scoped>

</style>