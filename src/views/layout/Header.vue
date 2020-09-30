<!--
 * @Descripttion: 页面顶部导航栏
 * @Author: 天泽
 * @Date: 2020-07-24 11:01:59
 * @LastEditors: 天泽
 * @LastEditTime: 2020-09-29 19:24:38
-->
<template>
  <header class="header clearfix">
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="onChangeCollapsed"
    />
    <div class="header-left">
      首页
    </div>
    <div class="header-right">
      <a-icon class="iconsearch" type="search"></a-icon>
      <a-dropdown placement="bottomCenter">
        <a-menu slot="overlay" @click="onSelectMenu">
          <a-menu-item key="user">个人中心</a-menu-item>
          <a-menu-item key="logout">退出登录</a-menu-item>
        </a-menu>
        <img class="avatar" :src="AvatarImg">
      </a-dropdown>
    </div>
  </header>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter, namespace } from 'vuex-class';
import { removeCookie } from '@/api/auth';
import AvatarImg from '@/assets/images/man.png';

const appModule = namespace('app');

@Component
export default class Header extends Vue {
  @Getter('collapsed') collapsed!: boolean;
  @appModule.Action('toggleCollapsed') toggleCollapsed!: Function;
  AvatarImg = AvatarImg;
  onChangeCollapsed () {
    this.toggleCollapsed(!this.collapsed);
  }
  onSelectMenu ({ key = null }) {
    if (key === 'logout') {
      // 删除cookie
      removeCookie();
      this.$router.push({
        name: 'Login'
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.header{
  position: relative;
  height: 64px;
  color: $fc-default;
  font-weight: bold;
  background-color: $bg-white;
  box-shadow: 2px 2px 8px $br-default;
  z-index: 1;
  .trigger{
    float: left;
    width: 68px;
    height: 64px;
    font-size: 20px;
    line-height: 20px;
    padding: 22px 24px;
    cursor: pointer;
    vertical-align: middle;
    transition: color .3s;
    &:hover {
      color: $nav-active-color;
    }
  }
  .header-left{
    float: left;
    line-height: 34px;
    padding: 15px 0;
  }
  .header-right{
    line-height: 34px;
    padding: 0 15px;
    float: right;
    .avatar{
      margin: 12px 0;
      width: 40px;
      height: 40px;
      outline: none;
      cursor: pointer;
      background-color: $img-bg-color;
      vertical-align: middle;
      border: none;
    }
    .iconsearch{
      cursor: pointer;
      font-size: 20px;
      padding: 0 15px;
      vertical-align: middle;
    }
  }
}
</style>
