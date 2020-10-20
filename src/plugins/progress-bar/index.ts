/* eslint-disable @typescript-eslint/no-explicit-any */
import { VueConstructor } from 'vue/types/vue';
import './index.scss';

export default class ProgressBar {
  public static node: any;
  public static install (Vue: VueConstructor) {
    const VueInstance = Vue.extend({
      data () {
        return {
          status: false,
          loadingRate: 10,
          timer: null
        };
      },
      render (h: Function) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self: any = this;
        return h(
          'div',
          {
            class: {
              'v-progress-bar': true
            },
            style: {
              display: self.status ? 'block' : 'none'
            }
          },
          [
            h('div', {
              class: {
                'progress-bar-inner': true
              },
              style: {
                width: `${self.loadingRate}%`
              }
            })
          ]
        );
      }
    });
    this.node = new VueInstance().$mount();
    const hasNode = document.getElementsByClassName('v-progress-bar').item(0);
    if (!hasNode) {
      document.body.appendChild(this.node.$el);
    }
  }
  public static show () {
    const remainRate = 100 - this.node.loadingRate;
    this.node.status = true;
    this.node.timer = setInterval(() => {
      if (remainRate < 10) {
        clearInterval(this.node.timer);
        return;
      }
      if (this.node.loadingRate === 100) {
        this.node.status = false;
        clearInterval(this.node.timer);
        return;
      }
      this.node.loadingRate += remainRate / 2;
    }, 1000);
  }
  public static hide () {
    this.node.status = false;
    clearInterval(this.node.timer);
  }
};
