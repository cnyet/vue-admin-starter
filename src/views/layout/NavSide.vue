<!--
 * @Descripttion: 侧边导航
 * @Author: 天泽
 * @Date: 2020-08-21 15:47:17
 * @LastEditors: 天泽
 * @LastEditTime: 2020-09-07 20:51:15
-->
<template>
  <aside :class="['wrapper', collapsed ? 'off' : 'on']">
    <div class="logo-box">
      <router-link class="link" to="/">{{collapsed ? '' : title}}</router-link>
    </div>
    <!-- <ul class="menus">
      <li class="menus-item"
        v-for="item in routes"
        :key="item.key">
        {{item.name}}
      </li>
    </ul> -->
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed">
      <a-menu-item key="1">
        <a-icon type="pie-chart" />
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="desktop" />
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="inbox" />
        <span>Option 3</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
        <a-menu-item key="5">
          Option 5
        </a-menu-item>
        <a-menu-item key="6">
          Option 6
        </a-menu-item>
        <a-menu-item key="7">
          Option 7
        </a-menu-item>
        <a-menu-item key="8">
          Option 8
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
        <a-menu-item key="9">
          Option 9
        </a-menu-item>
        <a-menu-item key="10">
          Option 10
        </a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">
            Option 11
          </a-menu-item>
          <a-menu-item key="12">
            Option 12
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </aside>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component({})
export default class NavSide extends Vue {
  readonly title: string = process.env.VUE_APP_TITLE;
  @Getter('collapsed') collapsed!: boolean;
  @Getter('routes') routes!: object[];
  created () {
    console.log(this.routes);
  }
};
</script>
<style lang="scss" scoped>
.wrapper{
  background-color: $aside-bg-color;
  transition: width .3s ease;
  &.off{
    width: 80px;
    .link{
      background-color: rgba(200, 200, 200, .3);
    }
  }
  &.on{
    width: 240px;
  }
  .logo-box{
    height: 32px;
    // background: $logo-bg-color;
    text-align: center;
    margin: 16px;
    .link{
      width: 100%;
      height: 100%;
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
