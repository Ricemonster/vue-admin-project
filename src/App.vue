<template>
  <div id="app">
    <div v-if="$store.state.token">
      <el-container>
        <el-header height="48px">
          <Header />
        </el-header>
        <el-container>
          <el-aside width="208px">
            <MenuBar />
          </el-aside>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </div>
    <div v-else>
       <router-view />
    </div>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue';
import Header from './views/Layout/header.vue';

export default {
  name: 'App',
  components: {MenuBar,Header},
  mounted(){
    // Login()
    // .then(res => {
    //   console.log(res)
    // })
  }
}
</script>

<style scoped lang="scss">
.el-container {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.el-header{
    background-color: $background-header-color;
    width: 100%;
    line-height: 48px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    height: 100vh;
  }
  
  .el-main {
    height: 100%;
    overflow: scroll-y;
  }
</style>
