import { ref, inject } from "vue";
// 引入本地存储数据
import { storageGet, storageSet } from "@/utils/storage";

// 定义浏览器的颜色模式
const DARK_THEME_QUERY = "(prefers-color-scheme: dark)";
const LIGHT_THEME_QUERY = "(prefers-color-scheme: light)";

// 定义 Theme
export const Theme = {
  Light: "light",
  Dark: "dark"
};
// 定义 storage 需要的 key
export const THEME_KEY = "theme";

// 定义能用到的变量
const themes = Object.values(Theme);
const ThemeSymbol = Symbol("theme");

// 定义修改 theme 的方法
const changeTheme = (defaultTheme) => {
  // 定义响应式变量
  const theme = ref(defaultTheme);

  // 设置 theme
  const setTheme = (newTheme) => {
    console.log(newTheme);
    if (themes.includes(newTheme) && newTheme !== theme.value) {
      theme.value = newTheme;
      storageSet("THEME_KEY", newTheme);
    }
  };

  // 改变 theme
  const toggleTheme = () =>
    setTheme(theme.value === Theme.Dark ? Theme.Light : Theme.Dark);

  // 获取浏览器的 theme
  const checkSystemTheme = () => {
    window
      .matchMedia(DARK_THEME_QUERY)
      .addEventListener(
        "change",
        ({ matches }) => matches && setTheme(Theme.Dark)
      );
    window
      .matchMedia(LIGHT_THEME_QUERY)
      .addEventListener(
        "change",
        ({ matches }) => matches && setTheme(Theme.Light)
      );
  };

  // 抛出定义的内容
  return {
    theme,
    setTheme,
    toggleTheme,
    checkSystemTheme
  };
};

// 新建 theme 流程
export const createTheme = (defaultTheme) => {
  const themeStore = changeTheme(defaultTheme);
  return {
    ...themeStore,
    install(app) {
      app.provide(ThemeSymbol, themeStore);
    }
  };
};

// 当前使用的 theme
export const useTheme = () => {
  return inject(ThemeSymbol);
};

// 获取系统的 theme 设置
export const getSystemLocalTheme = () => {
  // 获取本地存储
  const historyTheme = storageGet(THEME_KEY);
  if (historyTheme) {
    return historyTheme === Theme.Dark ? Theme.Dark : Theme.Light;
  }
  // 如果没有本地存储则获取系统设置
  if (window.matchMedia(DARK_THEME_QUERY).matches) {
    return Theme.Dark;
  }
  if (window.matchMedia(LIGHT_THEME_QUERY).matches) {
    return Theme.Light;
  }
  return Theme.Light;
};
