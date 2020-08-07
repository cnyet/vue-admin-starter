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

@Component({})
export default class Home extends Vue {
  @Prop() private msg!: string;
};
</script>
<style lang="scss" scoped="">
.home{
  padding: 20px;
}
</style>
