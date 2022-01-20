import { computed } from "vue";
import { useTheme, Theme } from "@/hooks/theme-change";

export const dataComputed = () => {
  // 获取当前 theme 信息
  const theme = useTheme();
  // 判断是否是白天模式
  const isDarkTheme = computed(() => theme.theme.value === Theme.Dark);

  return {
    theme,
    isDarkTheme
  };
};
