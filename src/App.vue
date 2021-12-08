<template>
  <div id="app">
    <div v-if="$store.getters.token">
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
            <Footer />
          </el-main>
        </el-container>
      </el-container>
    </div>
    <div v-else>
      <el-container>
        <el-header height="48px" style="margin-bottom: 50px">
          <Header :show="false" />
        </el-header>
        <el-main>
          <router-view />
          <Footer />
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue';
import Header from './views/Layout/header.vue';
import Footer from './views/Layout/footer.vue';
export default {
  name: 'App',
  components: {MenuBar,Header,Footer}
}
</script>

<style scoped lang="scss">
.el-container {
  height: 100vh;
  width: 100vw;
  background-color: $background-main-color;
  overflow: hidden;
}
.el-header{
    background-color: $background-header-color;
    width: 100%;
  }
  
  .el-aside {
    background-color: $background-aside-color;
    height: 100%;
  }
  
  .el-main {
    height: 100%;
    overflow: scroll-y;
    position: relative;
  }
</style>
