<template>
  <div class="permissions">
      <div class="box">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="users">用户组</el-tab-pane>
            <el-tab-pane label="配置管理" name="power">权限管理</el-tab-pane>
        </el-tabs>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            activeName: 'users'
        }
    }
}
</script>

<style lang="scss" scoped>
.permissions {
    width: 100%;
    background-color: $white-color;
    .box {
        width: 95%;
        margin: 0 auto;
    }
}
</style>