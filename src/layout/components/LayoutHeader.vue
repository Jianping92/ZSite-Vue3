<template>
  <header class="layout-header">LayoutHeader</header>
</template>

<script>
import { onMounted } from "vue";

export default {
  name: "LayoutHeader",
  components: {},
  setup() {
    onMounted(() => {});
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
