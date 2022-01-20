<template>
  <header class="layout-header">
    LayoutHeader
    <button @click="toggleTheme">切换底色</button>
  </header>
</template>

<script>
import { onMounted } from "vue";
import { dataComputed } from "@/hooks/data-computed";

export default {
  name: "LayoutHeader",
  components: {},
  setup() {
    const { theme } = dataComputed();
    onMounted(() => {});
    const toggleTheme = () => {
      theme.toggleTheme();
    };
    return {
      toggleTheme
    };
  }
};
</script>

<style lang="scss" scoped>
.layout-header {
  position: relative;
  width: 1280px;
  height: 50px;
  margin: 0 auto;
}
</style>
