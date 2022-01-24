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
@import "~@/assets/style/variables.scss";

.layout-main {
  position: relative;
  width: $body-width;
  height: 1500px;
  //min-height: 89vh;
  margin: 0 auto;
}
</style>
