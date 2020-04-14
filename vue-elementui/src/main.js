import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUi from "element-ui";
Vue.use(ElementUi);

import { Image } from "element-ui-images";
import "element-ui-images/lib/theme-chalk/index.css";
Vue.use(Image);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
