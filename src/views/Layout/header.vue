<template>
    <div class="header">
        <div class="login__logo">
            <img src="~@/static/image/logo.png" alt="">
            <div class="login__name">Admin Template Pro</div>
        </div>
        <div class="login__loginBox">
            <div class="login__loginBox__search">
                <i class="iconfont">&#xe8ef;</i>
            </div>
            <div class="login__loginBox__tips">
                <i class="iconfont">&#xe7c4;</i>
            </div>
            <div class="login__loginBox__user">
                <UserLogin />
            </div>
            <div class="login__loginBox__language">
                <svg viewBox="0 0 24 24" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z " class="css-c4d79v"></path></svg>
            </div>
        </div>
    </div>
</template>

<script>
import UserLogin from '@/components/UserLogin.vue'
export default {
    name: 'Header',
    components: {UserLogin}
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @include b('login__logo'){
        display: flex;
        flex-direction: row;
        align-items: center;
        line-height: 100%;
       img {
           max-height:10%;
           max-width: 10%;
           margin-right: 10px;
       }
       div {
            font-size: 17px;
            color: $text-header-color;
            margin-left: 5px;
            font-weight: 600;
       }
    }
    @include b('login__loginBox'){
        display: flex;
        flex-direction: row;
        align-items: center;
        color: $icon-header-color;
        @include e('search'){
            @extend .item;
        }
        @include e('tips'){
            @extend .item;
        }
        @include e('user'){
            height: 48px;
        }
        @include e('language'){
            @extend .item;
        }
    }

    .login__loginBox__search:hover,
    .login__loginBox__user:hover,
    .login__loginBox__language:hover{
        background: $hover-header-color;
    }
    .item {
        width: 50px;
        height: 48px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
}
</style>