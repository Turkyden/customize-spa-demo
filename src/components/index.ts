import * as antd from "antd";
import React from "react";
import "antd/dist/antd.css";

declare var window: Window & {
  antd: any;
  React: any;
};

// export to global for IDE
window.antd = antd;
window.React = React;

export { default as Button } from "./Button";
export { default as Foo } from "./Foo";

// export the other coms at here
