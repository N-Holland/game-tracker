import Vue from "vue";
import App from './App.vue'
import router from "./router";
import store from "./store";
//import "material-design-icons-iconfont/dist/material-design-icons.css";

//createApp(App).mount('#app')
new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");


