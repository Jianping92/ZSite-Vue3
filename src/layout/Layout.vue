<template>
  <div class="layout">
    <LayoutHeader />
    <LayoutMain />
    <LayoutFooter />
  </div>
</template>

<script>
import { onMounted } from "vue";
import LayoutHeader from "@/layout/components/LayoutHeader";
import LayoutMain from "@/layout/components/LayoutMain";
import LayoutFooter from "@/layout/components/LayoutFooter";

export default {
  name: "Layout",
  components: {
    LayoutHeader,
    LayoutMain,
    LayoutFooter
  },
  setup() {
    onMounted(() => {
      console.log("1");
    });
  }
};
</script>

<style lang="scss" scoped>
.layout {
}
</style>
