<!--
 * @Descripttion: 页面顶部进度组件
 * @Author: 天泽
 * @Date: 2020-10-20 17:24:32
 * @LastEditors: 天泽
 * @LastEditTime: 2020-10-21 14:48:31
-->
<template>
  <transition name="fade">
    <div :class="classes" :style="outerStyles" v-show="show">
      <div :class="innerClasses" :style="styles"></div>
    </div>
  </transition>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

const prefixCls = 'v-loading-bar';

@Component({})
export default class LoadingBar extends Vue {
  @Prop() private color = 'primary';
  @Prop() private failedColor = 'error';
  @Prop() private height = 2;
  public percent = 0;
  public status = 'success';
  public show = false;
  get classes () {
    return `${prefixCls}`;
  }
  get innerClasses () {
    return [
      `${prefixCls}-inner`,
      {
        [`${prefixCls}-inner-color-primary`]: this.color === 'primary' && this.status === 'success',
        [`${prefixCls}-inner-fail-color-error`]: this.failedColor === 'error' && this.status === 'error'
      }
    ];
  }
  get outerStyles () {
    return {
      height: `${this.height}px`
    };
  }
  get styles () {
    const style = {
      width: `${this.percent}%`,
      height: `${this.height}px`,
      backgroundColor: ''
    };
    if (this.color !== 'primary' && this.status === 'success') {
      style.backgroundColor = this.color;
    }
    if (this.color !== 'error' && this.status === 'error') {
      style.backgroundColor = this.failedColor;
    }
    return style;
  }
}
</script>
<style lang="scss" scoped>
.v-loading-bar{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
}
.v-loading-bar-inner {
  transition: width .2s linear;
}
.v-loading-bar-inner-color-primary {
  background-color: #2d8cf0;
}
.v-loading-bar-inner-failed-color-error {
    background-color: #ed4014
}
</style>
