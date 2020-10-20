<!--
 * @Descripttion: SVG图标组件
 * @Author: 天泽
 * @Date: 2020-10-16 14:36:28
 * @LastEditors: 天泽
 * @LastEditTime: 2020-10-19 18:03:38
-->
<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class SvgIcon extends Vue {
  @Prop({ required: true }) private svgName!: string;
  get iconName () {
    return `#${this.svgName}`;
  }
}
</script>
<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>
