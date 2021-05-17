import * as antd from "antd";
import "antd/dist/antd.css";

declare var window: Window & {
  antd: any;
};

// export to global
window.antd = antd;

export { default as Button } from "./Button";
export { default as Foo } from "./Foo";

// export the other coms at here
