<template>
  <div class="statistics">
    <div class="statistics-item">
      <Calendar></Calendar>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import Calendar from "@/components/Calendar/Calendar";

export default {
  name: "Statistics",
  components: {
    Calendar
  },
  setup() {
    onMounted(() => {});
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/variables.scss";

.statistics {
  position: relative;
  width: 100%;
  height: auto;
  margin-top: $currency-margin-top;
  .statistics-item {
    position: relative;
    overflow: hidden;
    border-radius: $currency-radius;
    margin-bottom: $currency-margin-down;
  }
}
</style>
