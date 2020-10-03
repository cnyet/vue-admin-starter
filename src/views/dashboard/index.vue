<template>
  <div class="wrapper">
    <div class="header">
      <a-row :gutter="20">
        <a-col :sm="12" :lg="6" v-for="item in summary" :key="item.key">
          <div class="card-box">
            <span class="card-icon">
              <i :class="['iconfont', iconMap[item.key]]"></i>
            </span>
            <div class="card-text">
              <a-statistic :title="item.name" :value="item.number" />
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import DashboardAction from '@/api/modules/dashboard';
import { ResponseData } from '@/api/http';

@Component({})
export default class Dashboard extends Vue {
  private iconMap = ['iconUsergroup', 'iconmessage', 'iconrmb', 'iconcart'];
  private summary = [];
  getDashboard () {
    DashboardAction.getDashboardData().then((res: ResponseData) => {
      console.log(res);
      if (res.data) {
        this.summary = res.data.summary;
      }
    }).catch(err => {
      console.error(err);
    });
  }
  created () {
    this.getDashboard();
  }
};
</script>
<style lang="scss" scoped>
.wrapper{
  padding: 20px;
  .card-box{
    display: flex;
    margin: 10px 0;
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
      ::v-deep{
        .ant-statistic{
          font-size: 16px;
        }
      }
    }
  }
}
</style>
