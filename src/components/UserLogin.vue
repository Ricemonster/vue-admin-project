<template>
    <el-dropdown @command="handleCommand">
    <div class="userInfo el-dropdown-link" >
        <div class="info">
            <img src="~@/static/image/u_d_avatar_m.png" alt="">
            <div>{{$store.state.user.userinfo.name}}</div>
        </div>
    </div>
    <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="user"><i class="iconfont icon-setting"></i> 个人中心</el-dropdown-item>
        <el-dropdown-item divided command="loginout"><i class="iconfont icon-logout"></i> 退出登录</el-dropdown-item>
    </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
export default {
    name: 'UserLogin',
    methods:{
        handleCommand(command){
            console.log(command)
            if(command == 'user'){
                this.$router.push('/user')
            } else if (command == 'loginout'){
                // 执行登出
                this.$store.dispatch('user/loginout')
            }
        }
    },
    data(){
        return {
            show: false
        }
    }
}
</script>

<style lang="scss" scoped>
.userInfo {
    cursor: pointer;
    height: 48px;
    padding: 0 10px;
    @include b('info'){
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content:center;
        img {
            max-height:  60%;
            max-width:  60%;
            margin-right: 10px;
        }
        color: $text-header-color;
        font-size: 13px;
        div {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    }
    @include b('droplist'){}
}
</style>