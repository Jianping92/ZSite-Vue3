<template>
  <div class="layout" :class="[theme]">
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
import { dataComputed } from "@/hooks/data-computed";

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
    const { theme } = dataComputed();
    return {
      theme: theme.theme
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/variables.scss";

.layout {
  position: relative;
  width: 100%;
  background: $body-bg;
  padding-top: $body-header-height;

  &.dark {
    @include darkTheme();
  }
  &.light {
    @include lightTheme();
  }
}
</style>
