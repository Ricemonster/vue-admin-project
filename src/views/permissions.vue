<template>
  <div class="permissions">
      <div class="box">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户组管理" name="users">
                <div class="usersCard">
                    <el-card class="box-card" v-for="(item,index) in group" :key="index + item.name">
                        <div slot="header" class="clearfix">
                            <span>{{ item.name }}</span>
                            <el-button style="float: right; padding: 3px 0" type="text">操作</el-button>
                        </div>
                        <div>
                            
                        </div>
                    </el-card>
                </div>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="power">权限管理</el-tab-pane>
        </el-tabs>
      </div>
  </div>
</template>

<script>
import { getAllUsers,getUserGroup } from '@/api/user';
export default {
    data(){
        return {
            activeName: 'users',
            group: [],
            users: []
        }
    },
    mounted(){
        getUserGroup().then(res => {
            this.group = res.data.data
            console.log(this.group)
        }),
        getAllUsers().then(res => {
            this.users = res.data.data
        })
    },
    methods:{
        handleClick(command){

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

    .usersCard {
        width: 100%;
        display: flex;
        flex-direction: row;
        .box-card {
            width: 20%;
            margin-bottom: 50px;
            margin-right: 20px;
        }
    }
}
.clearfix {
    line-height:10px;
    font-size: 14px;
}
</style>