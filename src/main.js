import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { create, NButton } from "naive-ui";
import { createTheme, getSystemLocalTheme } from "@/hooks/theme-change";

// css style reset
import "./assets/style/reset.css";

// 通用字体
import "vfonts/Lato.css";
// 等宽字体
import "vfonts/FiraCode.css";

const naive = create({
  components: [NButton]
});
// 声明 app
let app = createApp(App);
// 设置 theme
const currentTheme = getSystemLocalTheme();
const theme = createTheme(currentTheme);
theme.checkSystemTheme();
// 加载
app.use(store);
app.use(router);
app.use(theme);
app.use(naive);
// 挂载
app.mount("#app");
