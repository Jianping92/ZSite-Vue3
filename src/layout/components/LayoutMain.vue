<template>
  <main class="layout-main">
    <div class="layout-main-nav">
      <VerticalNavigation />
    </div>
    <div class="layout-main-content">
      <router-view />
    </div>
    <div class="layout-main-nav">3</div>
  </main>
</template>

<script>
import VerticalNavigation from "@/components/VerticalNavigation/VerticalNavigation";
import { onMounted } from "vue";

export default {
  name: "LayoutMain",
  components: {
    VerticalNavigation
  },
  setup() {
    onMounted(() => {});
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/variables.scss";

.layout-main {
  position: relative;
  width: $body-width;
  min-height: calc(100vh - $body-header-height - $body-footer-height);
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .layout-main-nav {
    position: relative;
    flex: none;
    flex-shrink: 0;
    width: $body-nav-width;
    height: auto;
    min-height: $body-nav-minHeight;
  }
  .layout-main-content {
    position: relative;
    flex: 1;
    height: auto;
    padding: 10px;
  }
}
</style>
