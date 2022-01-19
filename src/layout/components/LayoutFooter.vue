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
.layout-footer {
  position: relative;
  width: 1280px;
  height: 50px;
  margin: 0 auto;
}
</style>
