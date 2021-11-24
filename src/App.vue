<template>
  <div id="app">
    <div>
      <el-container>
        <el-header height="48px">
          <Header />
        </el-header>
        <el-container>
          <el-aside width="208px">
            <MenuBar />
          </el-aside>
          <el-main>

          </el-main>
        </el-container>
      </el-container>
    </div>

    <!-- <MenuBar /> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import { Login } from './api/User';
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
