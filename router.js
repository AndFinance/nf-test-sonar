import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
/* eslint-disable */
export default new Router({
  base: '/app',
  routes: [
    {
      path: "/app",
      redirect: "/dashboard",
      component: () => import("@/view/layout/Layout"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("@/view/pages/Dashboard.vue")
        },
        {
          path: "/invoice-onedock",
          name: "invoice",
          component: () => import("@/view/pages/invoice/Invoice.vue")
        },
        {
          path: "/invoice-factored",
          name: "invoice",
          component: () => import("@/view/pages/invoice/Invoice.vue")
        },
      ]
    },
    {
      path: "/",
      component: () => import("@/view/pages/auth/login_pages/Login-1"),
      children: [
        {
          name: "login",
          path: "/login",
          component: () => import("@/view/pages/auth/login_pages/Login-1")
        },
        {
          name: "register",
          path: "/register",
          component: () => import("@/view/pages/auth/login_pages/Login-1")
        }
      ]
    },
    {
      path: "*",
      redirect: "/404"
    },
  ]
});
