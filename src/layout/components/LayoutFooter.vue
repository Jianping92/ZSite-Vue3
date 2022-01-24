<template>
  <footer class="layout-footer">
    <div class="footer-item">由 Vue3/Express 提供技术支持</div>
    <!--<div class="footer-item">
      <a target="_blank" href="https://beian.miit.gov.cn/#/Integrated/index">
        京ICP备xxxxxxxx号
      </a>
    </div>-->
  </footer>
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
  height: $body-footer-height;
  //margin: 0 auto;
  background: $module-bg;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .footer-item {
    color: $primary-color;
    &:first-child {
      cursor: default;
      user-select: none;
    }
  }
}
</style>
