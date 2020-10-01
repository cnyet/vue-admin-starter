<template>
  <div class="wrapper">
    <div class="header">
      <a-row :gutter="20">
        <a-col :sm="12" :lg="6">
          <div class="card-box">
            <span class="card-icon">
              <i class="iconfont iconUsergroup"></i>
            </span>
            <div class="card-text">
              <p class="title">New Visits</p>
              <p class="number">102,400</p>
            </div>
          </div>
        </a-col>
        <a-col :sm="12" :lg="6">
          <div class="card-box">
            <span class="card-icon">
              <i class="iconfont iconmessage"></i>
            </span>
            <div class="card-text">
              <p class="title">Messages</p>
              <p class="number">81,212</p>
            </div>
          </div>
        </a-col>
        <a-col :sm="12" :lg="6">
          <div class="card-box">
            <span class="card-icon">
              <i class="iconfont iconrmb"></i>
            </span>
            <div class="card-text">
              <p class="title">Purchases</p>
              <p class="number">9,280</p>
            </div>
          </div>
        </a-col>
        <a-col :sm="12" :lg="6">
          <div class="card-box">
            <span class="card-icon">
              <i class="iconfont iconcart"></i>
            </span>
            <div class="card-text">
              <p class="title">Shoppings</p>
              <p class="number">13,600</p>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Dashboard extends Vue {

};
</script>
<style lang="scss" scoped>
.wrapper{
  padding: 20px;
  .header{
    margin: 15px 0;
  }
  .card-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $bg-white;
    padding: 15px;
    transition: all .3s;
    cursor: pointer;
    &:hover{
      box-shadow: 0 2px 8px rgba(0,0,0,.09);
    }
    .card-icon{
      width: 64px;
      height: 64px;
      text-align: center;
      .iconfont{
        font-size: 40px;
      }
      .iconUsergroup{
        color: $icon-user;
      }
      .iconmessage{
        color: $icon-message;
      }
      .iconrmb{
        color: $icon-purchase;
      }
      .iconcart{
        color: $icon-cart;
      }
    }
    .card-text{
      line-height: 30px;
      font-weight: bold;
      .title{
        font-size: 18px;
        color: $fc-light;
      }
      .number{
        font-size: 20px;
        color: $fc-default;
      }
    }
  }
}
</style>
