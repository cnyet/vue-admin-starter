<!--
 * @Descripttion: 接口报错页面
 * @Author: 天泽
 * @Date: 2020-08-05 19:29:07
 * @LastEditors: 天泽
 * @LastEditTime: 2020-08-06 11:53:48
-->
<template>
  <div class="container">
    <div class="wrapper">
      <div class="error">
        <img class="error-img" src="../../assets/images/500-color.svg" alt="">
      </div>
      <div class="forbid-box">
        <h1 class="forbid-title">500</h1>
        <p class="forbid-tips">抱歉，服务器出错了</p>
        <a-button type="primary" @click="onClick">返回上一页</a-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Error extends Vue {
  onClick () {
    this.$router.go(-1)
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
      .error-img{
        width: 400px;
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
