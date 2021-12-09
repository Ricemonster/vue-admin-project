<template>
  <div class="container">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="$route.path"
          @select="handleSelect"
          >
        <template v-for="(fitem,findex) in $store.getters.routes">
            <!-- 多级菜单 -->
            <el-submenu :index="String(findex)"  v-if="fitem.children" :key="findex + fitem.path">
              <template slot="title">
                <i :class="['iconfont',`icon-${fitem.meta.icon}`]"></i>
                <span>{{fitem.meta.title}}</span>
              </template>
              <el-menu-item-group v-for="(sitem,sindex) in fitem.children" :key="findex + sindex + sitem.path">
                <el-menu-item :index="sitem.path">
                  <i :class="['iconfont',`icon-${sitem.meta.icon}`]"></i>
                  <span>{{sitem.meta.title}}</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- 单级菜单 -->
            <el-menu-item v-if="(!fitem.children && !fitem.meta.hidden)" :index="fitem.path" :key="findex + fitem.path">
              <i :class="['iconfont',`icon-${fitem.meta.icon}`]"></i>
              <span>{{fitem.meta.title}}</span>
            </el-menu-item>
        </template>
        </el-menu>

      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      routers: ''
    }
  },
  mounted(){
    this.routers = this.$store.getters.routes
  },
  methods: {
    handleSelect(key){
      this.$router.push(key)
    }
  },
  watch:{
    '$store.getters.routes'(){
      this.routers = this.$store.getters.routes
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color:$background-aside-color;
  overflow-x: hidden;
}
::v-deep .el-menu {
  width: 100%;
  height: 100%;
  background-color:$background-aside-color;
}
::v-deep .el-submenu{
  color: $text-base-color;
  & i {
    color: $text-base-color;
  }
}
::v-deep .el-menu-item-group {
}
::v-deep .el-menu-item{
  color: $text-base-color;
  &:hover{
    color: $hover-aside-color;
    & i{
      color: $hover-aside-color;
    }
  }
}
::v-deep .el-menu-item i {
    color: $text-base-color;
}
::v-deep .el-icon-arrow-down{
  font-weight: bold;
  font-size: 15px;
}
::v-deep .el-submenu__title {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.iconfont {
  margin-right: 10px;
}
</style>