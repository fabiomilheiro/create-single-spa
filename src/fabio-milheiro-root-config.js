import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

// registerApplication({
//   name: "@fabio-milheiro/navbar",
//   app: () => System.import("@fabio-milheiro/navbar"),
//   activeWhen: "/",
// });

// registerApplication(
//   "@fabio-milheiro/navbar",
//   () => System.import("@fabio-milheiro/navbar"),
//   isActive.navbar
// );

registerApplication(
  "@fabio-milheiro/products",
  () => System.import("@fabio-milheiro/products"),
  isActive.products
);

start();
