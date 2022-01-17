import loadable from "@loadable/component";

const lazy = loadable(() => import("./index"));
export default lazy;
