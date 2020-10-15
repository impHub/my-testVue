import router, { defaultRoutes } from "./index";
// import { routes } from './index'
// import { from } from "core-js/fn/array";
console.log(defaultRoutes);
export const setRoutes = menu => {
  router.addRoutes(menu);
  router.options.routes = defaultRoutes.concat(menu);
};
