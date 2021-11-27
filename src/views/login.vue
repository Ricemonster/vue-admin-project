<template>
  <el-form :model="form" :rules="rules" ref="form" class="login">
    <div class="login__name">
      <div class="login__name__logo">
        <img src="~@/static/image/logo.png" alt="">
        <div>Admin Template Pro</div>
      </div>
      <div class="login__name__des">Admin Template Pro 是我仿照 Ant Design 做的一个Web后台管理解决方案</div>
    </div>
    <div class="login__box">
      <el-form-item class="login__box__item" prop="username">
        <el-input
          type="text"
          class="login__box__input"
          placeholder="用户名: admin visitor"
          prefix-icon="el-icon-user"
          v-model="form.username">
        </el-input>
      </el-form-item>
      <el-form-item class="login__box__item" prop="password">
        <el-input
          type="password"
          show-password
          class="login__box__input"
          placeholder="密码: 123456"
          prefix-icon="el-icon-lock"
          v-model="form.password">
        </el-input>
      </el-form-item>
      <div class="login__box__pas">
        <el-checkbox v-model="Rememberpassword">自动登录</el-checkbox>
        <router-link to="/">忘记密码?</router-link>
      </div>
      <el-button class="login__box__submit" @click="login" type="primary">登录</el-button>
        <div class="login__box__other">
          <div class="login__box__other--name">其他登录方式 : </div>
          <!-- <div></div> -->
        </div>
    </div>

  </el-form>
</template>

<script>

export default {
  name: 'Login',
  data(){
    return {
      form:{
        username: '',
        password: '',
      },
      Rememberpassword: true,
      rules: {
        username: [
          {required:true, message: '用户名不能为空',trigger: 'blur'}
        ],
        password: [
          {required:true, message: '密码不能为空',trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    login(){
      this.$refs['form'].validate(validate => {
        if(validate){
          // 执行登录流程
          this.$store.dispatch('user/login',this.form)
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })

        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$marginValue: 25px;


.login {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
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
    @include e('item'){
      width: 100%;
      margin-bottom: $marginValue;
    }
    @include e('pas'){
      color: $theme-color;
      width: 100%;
      font-size: 14px;
      display: flex;
      flex-direction:row;
      align-items: center;
      justify-content: space-between;
      a {
        color: $theme-color;
        &:hover {
          opacity: .8;
        }
      }
    }
    @include e('submit'){
      margin-top: $marginValue;
      width: 100%;
      font-size: 16px;
    }
      @include e('other'){
    margin-top: $marginValue;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content:flex-start;
    @include m('name'){
      font-size: 14px;
      color: $text-base-color;
    }
  }
  }

}


::v-deep .el-input__inner:focus{
  border-color: $theme-color;
}
</style>