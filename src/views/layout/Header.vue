<!--
 * @Descripttion: 页面顶部导航栏
 * @Author: 天泽
 * @Date: 2020-07-24 11:01:59
 * @LastEditors: 天泽
 * @LastEditTime: 2020-09-04 19:19:44
-->
<template>
  <header class="header">
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="onChangeCollapsed"
    />
  </header>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter, namespace } from 'vuex-class';

const appModule = namespace('app');

@Component
export default class Header extends Vue {
  @Getter('collapsed') collapsed!: boolean;
  @appModule.Action('toggleCollapsed') toggleCollapsed!: Function;
  onChangeCollapsed () {
    this.toggleCollapsed(!this.collapsed);
  }
};
</script>
<style lang="scss" scoped>
.header{
  position: relative;
  height: 64px;
  font-size: 24px;
  color: $fc-default;
  font-weight: bold;
  background-color: $bg-white;
  box-shadow: 2px 2px 8px $br-default;
  z-index: 1;
  .trigger{
    font-size: 20px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color .3s;
    &:hover {
      color: $nav-active-color;
    }
  }
}
</style>
