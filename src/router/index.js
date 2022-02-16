import { createRouter, createWebHashHistory } from "vue-router";

// import Layout from "@/layout/Layout";

export const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      icon: "home",
      title: "ZCatSite",
      name: "本站主页"
    },
    component: () => import("@/views/Home/Home")
  },
  {
    path: "/Code",
    name: "Code",
    meta: {
      icon: "code",
      title: "技术集合",
      name: "编程技术"
    },
    component: () => import("@/views/Code/Code")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
