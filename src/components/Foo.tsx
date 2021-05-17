import React from "react";
import { middleware } from "../sdk";

export interface FooProps {
  children?: any;
}

export const Foo: React.FC<FooProps> = ({ children = "Button" }) => {
  return <div>{children}</div>;
};

Foo.displayName = "Foo";

export default middleware(Foo);
