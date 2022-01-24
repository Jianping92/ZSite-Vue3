<template>
  <header class="layout-header">
    <div class="header-body">
      <h1>Z-Cat-Site</h1>
      <div class="header-control">
        <div class="header-control-theme" @click="toggleTheme">
          <SvgIcon class="theme-color" :svgUrl="themeIcon"></SvgIcon>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { onMounted, computed } from "vue";
import { dataComputed } from "@/hooks/data-computed";
import SvgIcon from "@/components/SvgIcon/SvgIcon";

export default {
  name: "LayoutHeader",
  components: {
    SvgIcon
  },
  setup() {
    const { theme } = dataComputed();
    onMounted(() => {});
    const toggleTheme = () => {
      theme.toggleTheme();
    };
    const themeIcon = computed(() => {
      return theme.theme.value;
    });
    return {
      themeIcon,
      toggleTheme
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/variables.scss";

.layout-header {
  position: fixed;
  width: 100%;
  height: $body-header-height;
  background: $module-bg;
  top: 0;
  left: 0;

  .header-body {
    position: relative;
    width: $body-width;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > h1 {
      color: $primary-color;
    }

    .header-control {
      .header-control-theme {
        position: relative;
        color: $theme-color;
        cursor: pointer;
        .theme-color {
          color: $theme-color;
          width: 30px;
          height: 30px;
        }
      }
    }
  }
}
</style>
