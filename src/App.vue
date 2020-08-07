<template>
  <div id="app">
    <Header />
    <main class="body">
      <transition name="fade">
        <router-view />
      </transition>
    </main>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Header from '@/components/Header.vue';

@Component({
  components: { Header }
})
export default class App extends Vue { };
</script>
<style lang="scss">
@import "./assets/styles/common.scss";
#app{
  position: relative;
  height: 100%;
  width: 100%;
  .body{
    position: absolute;
    top: 64px;
    bottom: 0;
    z-index: 0;
    width: 100%;
    background-color: $bg-light;
    overflow: auto;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
