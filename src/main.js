// 중괄호가 쳐져있으면 export 된 항목 요소중 하나만 선택 없으면 대표요소를 import
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "@mdi/font/css/materialdesignicons.css";

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount("#app");
// createApp(App).mount('#app')
