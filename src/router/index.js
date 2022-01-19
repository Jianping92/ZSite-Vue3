import { createRouter, createWebHashHistory } from "vue-router";

import Layout from "@/layout/Layout";

const routes = [
  {
    path: "/",
    name: Layout,
    component: Layout
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
