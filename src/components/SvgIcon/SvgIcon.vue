<template>
  <svg class="icon" aria-hidden="true" v-html="url"></svg>
</template>

<script>
import { computed } from "vue";

export default {
  name: "SvgIcon",
  props: {
    svgUrl: {
      type: String,
      required: true,
      default: "dark"
    }
  },
  components: {},
  setup(props) {
    const url = computed(() => {
      return `<use xlink:href="#icon-${props.svgUrl}"></use>`;
    });
    return {
      url
    };
  }
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
