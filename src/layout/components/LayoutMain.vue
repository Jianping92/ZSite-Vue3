<template>
  <main class="layout-main">LayoutMain</main>
</template>

<script>
import { onMounted } from "vue";

export default {
  name: "LayoutMain",
  components: {},
  setup() {
    onMounted(() => {});
  }
};
</script>

<style lang="scss" scoped>
.layout-main {
  position: relative;
  width: 1280px;
  height: auto;
  min-height: 89vh;
  margin: 0 auto;
}
</style>
