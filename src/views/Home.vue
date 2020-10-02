<!--
 * @Descripttion: 首页
 * @Author: 天泽
 * @Date: 2020-08-06 18:55:18
 * @LastEditors: 天泽
 * @LastEditTime: 2020-10-02 16:29:16
-->
<template>
  <section class="container">
    <NavSide />
    <main class="body">
      <Header />
      <div class="content">
        <transition name="slide">
          <router-view />
        </transition>
      </div>
    </main>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HomeAction from '@/api/modules/home';
import UserAction from '@/api/modules/user';
import Header from './layout/Header.vue';
import NavSide from './layout/NavSide.vue';

@Component({
  components: { Header, NavSide }
})
export default class Home extends Vue {
  @Prop() private msg!: string;
  getHomeList () {
    HomeAction.getHomeList().then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err);
    });
  }
  getUserList () {
    UserAction.getUserList().then(res => {
      console.log(res);
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
    this.getUserList();
  }
};
</script>
<style lang="scss" scoped>
.slide-enter-active {
  transition: all .5s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.container{
  display: flex;
  height: 100%;
  .body{
    position: relative;
    flex: auto;
    .content{
      width: 100%;
      position: absolute;
      bottom: 0;
      top: 64px;
      overflow-y: auto;
      background-color: $bg-grey;
    }
  }
}
</style>
