<!--
 * @Descripttion: 页面顶部导航栏
 * @Author: 天泽
 * @Date: 2020-07-24 11:01:59
 * @LastEditors: 天泽
 * @LastEditTime: 2020-08-07 15:43:28
-->
<template>
  <header class="header">
    <router-link class="link" to="/">{{title}}</router-link>
  </header>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  readonly title: string = process.env.VUE_APP_TITLE;
};
</script>
<style lang="scss" scoped>
.header{
  position: relative;
  height: 64px;
  font-size: 24px;
  padding: 20px 30px;
  color: $fc-default;
  font-weight: bold;
  background-color: $bg-white;
  box-shadow: 0 2px 8px $br-default;
  z-index: 1;
  .link{
    display: inline-block;
    line-height: 24px;
    vertical-align: top;
  }
}
</style>
