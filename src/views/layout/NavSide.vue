<!--
 * @Descripttion: 侧边导航
 * @Author: 天泽
 * @Date: 2020-08-21 15:47:17
 * @LastEditors: 天泽
 * @LastEditTime: 2020-10-16 18:26:19
-->
<template>
  <aside :class="['wrapper', collapsed ? 'off' : 'on']">
    <div class="logo-box">
      <router-link class="link" to="/"></router-link>
    </div>
    <a-menu
      mode="inline"
      theme="dark"
      :default-selected-keys="['0']"
      :inline-collapsed="collapsed"
      @click="onChangeMenu">
      <template v-for="item in menus">
        <a-sub-menu v-if="item.children" :key="item.value">
          <span slot="title">
            <i :class="['iconfont', item.icon]"></i>
            <span class="nav-text">{{item.name}}</span>
          </span>
          <a-menu-item v-for="element in item.children" :key="element.value">
            <span>{{element.name}}</span>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item v-else :key="item.value">
          <!-- <a-icon type="dashboard" /> -->
          <svg-icon svgName="dashboard" />
          <span class="nav-text">{{item.name}}</span>
        </a-menu-item>
      </template>
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
  @Getter('routes') menus!: object[];
  onChangeMenu ({ key }: { key: string }) {
    this.$router.push({ name: key });
  }
};
</script>
<style lang="scss" scoped>
.wrapper{
  overflow-y: auto;
  background-color: $aside-bg-color;
  transition: width .3s ease;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &.off{
    width: 80px;
    .iconfont{
      font-size: 18px;
    }
    .nav-text{
      display: none;
    }
  }
  &.on{
    width: 240px;
  }
  .ant-menu-item {
    margin-top: 0;
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
      background-color: rgba(200, 200, 200, .3);
    }
  }
  .iconfont{
    margin-right: 10px;
  }
  .nav-text{
    display: inline-block;
  }
}
</style>
