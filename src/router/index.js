import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import Page2 from "../views/Page2.vue";

Vue.use(VueRouter);
console.log(process.env.NODE_ENV);

export const defaultRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue")
  }
  // {
  //   path: "/page",
  //   name: "Page",
  //   component: () => import("../views/Page.vue")
  // }
];

// let route = [
//   {
//     path: "/page",
//     name: "Page",
//     component: () => import("../views/Page.vue")
//   },
//   {
//     path: "/page2",
//     name: "Page2",
//     component: Page2
//   }
// ];
// 根据后台返回的用户信息来 判断
// let commonUser;
// if (user === "administrator") {
//   commonUser = ["Page", "Page2"];
// } else if (user === "general") {
//   commonUser = ["Page"];
// }
// let commonUser = ["Page", "Page2"];
// let commonUserRoute = route.filter(function(page) {
//   // 匹配对应的结果
//   return commonUser.includes(page.name);
// });
// console.log(commonUserRoute);
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: defaultRoutes
});
// router.addRoutes(commonUserRoute);
export default router;
