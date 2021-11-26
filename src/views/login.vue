<template>
  <div class="login">
    <div class="login__name">
      <div class="login__name__logo">
        <img src="~@/static/image/logo.png" alt="">
        <div>Admin Template Pro</div>
      </div>
      <div class="login__name__des">Admin Template Pro 是我仿照 Ant Design 做的一个Web后台管理解决方案</div>
    </div>
    <div class="login__box">
      <el-input
        type="text"
        class="login__box__input"
        placeholder="用户名: admin visitor"
        prefix-icon="el-icon-user"
        v-model="username">
      </el-input>
      <el-input
        type="password"
        show-password
        class="login__box__input"
        placeholder="密码: 123456"
        prefix-icon="el-icon-lock"
        v-model="password">
      </el-input>
      <div class="login__box__pas">
          <el-radio-group v-model="Rememberpassword">
            <el-radio :label="ok">自动登录</el-radio>
          </el-radio-group>
      </div>


    </div>
    <div class="login__other"></div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data(){
    return {
      username: '',
      password: '',
      Rememberpassword: 'ok'
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @include b('login__name'){
    display: flex;
    flex-direction: column;
    align-content: center;
    @include e('logo'){
      display: flex;
      flex-direction:row;
      align-items: center;
      img {
        max-height: 80px;
        max-width: 80px;
      }
      div {
        font-size: 30px;
        font-weight: 500;
        margin-left: 10px;
      }
    }
    @include e('des'){
      font-size:14px;
      color: rgba(0,0,0,.45);
    }
  }
  @include b('login__box'){
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    @include e('input'){
      width: 100%;
      margin-bottom: 20px;
    }
  }
}


::v-deep .el-input__inner:focus{
  border-color: $theme-color;
}
</style>