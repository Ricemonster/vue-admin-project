<template>
  <div class="userInfo">
      <div class="info">
          <img src="~@/static/image/u_d_avatar_m.png" alt="">
          <div>{{$store.state.user.userinfo.name}}</div>
      </div>
      <div class="droplist"></div>
  </div>
</template>

<script>
export default {
    name: 'UserLogin',
}
</script>

<style lang="scss" scoped>
.userInfo {
    cursor: pointer;
    height: 100%;
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