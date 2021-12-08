<template>
  <div class="footer">
    <div class="footer__1">
      <a href="https://github.com/Ricemonster/vue-admin-project" target="_blank"><i class="iconfont icon-github"></i></a>
    </div>
    <div class="footer__2">
      <i class="iconfont icon-copyright"></i>
      &nbsp;
      <span>2021 Ricemonster - 城外三石出品</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 20px;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%);
  color: rgba(0,0,0,.45);
  font-size: 14px;
  @include b('footer__1'){
    & i:hover{
      color: $text-base-color;
    }
  }
  @include b('footer__2'){
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
</style>