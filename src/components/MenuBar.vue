<template>
  <div class="container">
    <el-row class="tac">
      <el-col :span="24">
        <template v-for="(item,index) in $store.getters.routes">
          {{item.meta.title}}
          <!-- <el-menu-item :index="index" :key="index + item.path">
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.meta.title}}</span>
          </el-menu-item> -->
        </template>
        <el-menu
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$store.getters.routes)
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  watch:{
    '$store.getters.routes'(){
        console.log(this.$store.getters.routes)
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

</style>