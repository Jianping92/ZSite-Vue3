<template>
  <footer class="layout-footer">LayoutFooter</footer>
</template>

<script>
import { onMounted } from "vue";

export default {
  name: "LayoutFooter",
  components: {},
  setup() {
    onMounted(() => {});
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/variables.scss";

.layout-footer {
  position: relative;
  width: 100%;
  height: 50px;
  margin: 0 auto;
  background: $module-bg;
}
</style>
