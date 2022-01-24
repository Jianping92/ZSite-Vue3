<template>
  <div class="app-default">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/variables.scss";

#app {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.app-default {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  background: $body-bg;
}
</style>
