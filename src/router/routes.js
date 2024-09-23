const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/readpage/:customerid",
        name: "readpage",
        component: () => import("pages/ReadPage.vue"),
      },
      { path: "/trends", component: () => import("pages/TrendsPH.vue") },
      { path: "/sports", component: () => import("pages/SportsPage.vue") },
      {
        path: "/gaming",
        component: () => import("pages/GamingPage.vue"),
      },
      {
        path: "/news",
        component: () => import("pages/NewsPage.vue"),
      },
    ],
  },
  // {
  //   path: "/loginform",
  //   component: () => import("layouts/LoginLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/LoginPage.vue") }],
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
