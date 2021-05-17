import React from "react";

declare var window: Window & {
  pcComponentsConfig: {
    [K in string]?: {
      rewriteFn?: (newProps: any) => any;
      refactorFn?: (Com: any, newProps: any) => any;
    };
  };
};

// proxy component
export function middleware(Com: any, displayName?: string): any {
  if (!window.pcComponentsConfig) return Com;
  if (!window.pcComponentsConfig[displayName || Com.displayName]) return Com;

  const comMap = window.pcComponentsConfig[displayName || Com.displayName];

  if (!comMap) return Com;

  const { rewriteFn, refactorFn } = comMap;

  return React.forwardRef((props, ref) => {
    // rewrite
    if (rewriteFn && rewriteFn(props)) {
      const newProps = { ...props, ...rewriteFn(props) };
      return React.createElement(Com, { ...newProps, ref });
    }

    // refactor
    if (refactorFn && refactorFn(Com, props)) {
      const { com: newCom, props: newProps } = refactorFn(Com, props);
      return React.createElement(newCom, { ...newProps, ref });
    }

    return React.createElement(Com, { ...props, ref });
  });
}
