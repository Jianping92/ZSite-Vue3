import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { create, NButton } from "naive-ui";

// css style reset
import "./assets/style/reset.css";

// 通用字体
import "vfonts/Lato.css";
// 等宽字体
import "vfonts/FiraCode.css";

const naive = create({
  components: [NButton]
});

createApp(App).use(store).use(router).use(naive).mount("#app");
