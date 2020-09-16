<!--
 * @Descripttion:
 * @Author: 天泽
 * @Date: 2020-08-06 18:55:18
 * @LastEditors: 天泽
 * @LastEditTime: 2020-09-16 16:05:38
-->
<template>
  <div id="app">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class App extends Vue { };
</script>
<style lang="scss">
@import './assets/iconfont/iconfont.css';
@import "./assets/styles/common.scss";

#app{
  position: relative;
  height: 100%;
  width: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
