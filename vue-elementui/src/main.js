import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { ElImage } from "element-ui-image";
import Element from "element-ui-image";
import "element-ui-image/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.use(Element);
// Vue.use(ElImage);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
