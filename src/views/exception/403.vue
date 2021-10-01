<!--
 * @Descripttion: 没有权限页面
 * @Author: 天泽
 * @Date: 2020-08-05 19:29:07
 * @LastEditors: 天泽
 * @LastEditTime: 2020-10-01 14:15:50
-->
<template>
  <div class="container">
    <div class="wrapper">
      <div class="error">
        <img class="forbid-img" src="../../assets/images/403-color.svg" alt="">
      </div>
      <div class="forbid-box">
        <h1 class="forbid-title">403</h1>
        <p class="forbid-tips">抱歉，你无权访问该页面</p>
        <a-button type="primary" @click="onClick">返回首页</a-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Forbiddance extends Vue {
  onClick () {
    this.$router.push('/')
  }
};
</script>
<style lang="scss" scoped>
.container{
  height: 100%;
  .wrapper{
    text-align: center;
    padding-top: 10%;
    margin: 0 auto;
    .error{
      display: inline-block;
      vertical-align: middle;
      .forbid-img{
        width: 500px;
      }
    }
    .forbid-box{
      margin-left: 30px;
      text-align: left;
      display: inline-block;
      vertical-align: middle;
    }
    .forbid-title{
      margin-bottom: 24px;
      color: #515a6e;
      font-weight: 600;
      font-size: 72px;
      line-height: 72px;
    }
    .forbid-tips{
      margin-bottom: 16px;
      color: #808695;
      font-size: 20px;
      line-height: 28px;
    }
  }
}
</style>
