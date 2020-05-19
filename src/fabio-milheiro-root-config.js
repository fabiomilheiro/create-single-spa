import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication({
  name: "@fabio-milheiro/navbar",
  app: () => System.import("@fabio-milheiro/navbar"),
  activeWhen: isActive.navbar,
});

start({
  urlRerouteOnly: true,
});
