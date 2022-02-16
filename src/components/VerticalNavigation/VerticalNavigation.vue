<template>
  <div class="vertical-nav">
    <div
      class="nav-item"
      v-for="item in navList"
      :key="item.path"
      :class="item.path === activeNav ? 'active' : ''"
      @click="nextPage(item.path)"
    >
      <SvgIcon class="custom-icon" :svgUrl="item.icon" />
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, getCurrentInstance, computed } from "vue";
import { useRouter } from "vue-router";
import SvgIcon from "@/components/SvgIcon/SvgIcon";

export default {
  name: "VerticalNavigation",
  components: {
    SvgIcon
  },
  setup() {
    const { proxy } = getCurrentInstance();
    const router = useRouter();
    const routes = proxy.$router.options.routes;
    onMounted(() => {});
    const navList = computed(() => {
      return routes.map((item) => {
        return {
          name: item.meta.name,
          icon: item.meta.icon,
          path: item.path
        };
      });
    });
    const activeNav = computed(() => {
      return router.currentRoute.value.path;
    });
    const nextPage = (path) => {
      if (path !== activeNav.value) {
        router.push(path);
      }
    };
    return {
      navList,
      activeNav,
      nextPage
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/variables.scss";

.vertical-nav {
  position: absolute;
  top: 25px;
  left: 10px;
  right: 10px;
  .nav-item {
    position: relative;
    width: 100%;
    height: 45px;
    border-radius: $currency-radius;
    color: $primary-color;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    font-size: $currency-font-size;
    user-select: none;
    &:hover {
      background-color: $module-bg;
    }
    &.active {
      background-color: $module-bg-opaque;
    }
    .custom-icon {
      color: $primary-color;
      margin: $currency-padding-left-right;
    }
  }
  .nav-item + .nav-item {
    margin-top: 15px;
  }
}
</style>
