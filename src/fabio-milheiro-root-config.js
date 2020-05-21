import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication({
  name: "@fabio-milheiro/navbar",
  app: () => System.import("@fabio-milheiro/navbar"),
  activeWhen: "/",
});

registerApplication({
  name: "@fabio-milheiro/products",
  app: () => System.import("@fabio-milheiro/products"),
  activeWhen: "/products",
});

start({
  urlRerouteOnly: true,
});
