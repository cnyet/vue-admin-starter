<!--
 * @Descripttion: 首页
 * @Author: 天泽
 * @Date: 2020-08-06 18:55:18
 * @LastEditors: 天泽
 * @LastEditTime: 2020-08-07 15:52:27
-->
<template>
  <div class="home">
    首页
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { HomeAction } from '@/api';

@Component({})
export default class Home extends Vue {
  @Prop() private msg!: string;
  getHomeList () {
    HomeAction.getHomeList().then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err);
    });
  }
  saveNewItem () {
    HomeAction.saveNewItem({
      name: 123
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err);
    });
  }
  created () {
    this.getHomeList();
    this.saveNewItem();
  }
};
</script>
<style lang="scss" scoped="">
.home{
  padding: 20px;
}
</style>
