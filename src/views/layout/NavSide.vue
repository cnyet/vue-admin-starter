<!--
 * @Descripttion:
 * @Author: 天泽
 * @Date: 2020-08-21 15:47:17
 * @LastEditors: 天泽
 * @LastEditTime: 2020-08-21 20:02:36
-->
<template>
  <aside class="wrapper">
    <div class="logo-box">
      <router-link class="link" to="/">{{title}}</router-link>
    </div>
    <ul class="menus">
      <li class="menus-item"
        v-for="item in routes"
        :key="item.name">
        {{item.name}}
      </li>
    </ul>
  </aside>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class NavSide extends Vue {
  readonly title: string = process.env.VUE_APP_TITLE;
  get routes () {
    return this.$store.getters.routes;
  }
  created () {
    console.log(this.routes);
  }
};
</script>
<style lang="scss" scoped>
.wrapper{
  flex: 0 0 200px;
  background-color: $aside-bg-color;
  .logo-box{
    height: 32px;
    // background: $logo-bg-color;
    text-align: center;
    margin: 16px;
    .link{
      font-size: 16px;
      font-weight: bold;
      color: $fc-white;
      display: inline-block;
      line-height: 32px;
    }
  }
  .menus{
    font-size: 16px;
    color: $fc-white;
    margin: 0;
    padding: 0 15px;
    .menus-item{
      line-height: 30px;
    }
  }
}
</style>
