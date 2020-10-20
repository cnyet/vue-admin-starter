/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from 'vue';
import LoadingBar from './loading-bar.vue';

LoadingBar.NewInstance = (properties: {}) => {
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
  document.body.appendChild(component.$el);

  const loadingBar: any = Instance.$children[0];
  return {
    component: loadingBar,
    update (options: { percent: any; status: any; show: any }) {
      if ('percent' in options) {
        loadingBar.percent = options.percent;
      }
      if (options.status) {
        loadingBar.status = options.status;
      }
      if ('show' in options) {
        loadingBar.show = options.show;
      }
    },
    destroy () {
      document.body.removeChild(document.getElementsByClassName('v-loading-bar')[0]);
    }
  };
};

export default LoadingBar;
