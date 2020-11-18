/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from 'vue';
import LoadingBar from './loading-bar.vue';

(LoadingBar as any).NewInstance = (properties: {}) => {
  const _props = properties || {};
  const Instance = new Vue({
    data: _props,
    render (h) {
      return h(LoadingBar, {
        props: _props
      });
    }
  });
  const component = Instance.$mount();
  const instanceLoadingBar: any = Instance.$children[0];
  document.body.appendChild(component.$el);

  return {
    update (options: { percent: any; status: any; show: any }) {
      if ('percent' in options) {
        instanceLoadingBar.percent = options.percent;
      }
      if (options.status) {
        instanceLoadingBar.status = options.status;
      }
      if ('show' in options) {
        instanceLoadingBar.show = options.show;
      }
    },
    destroy () {
      document.body.removeChild(document.getElementsByClassName('v-loading-bar')[0]);
    }
  };
};

export default LoadingBar;
