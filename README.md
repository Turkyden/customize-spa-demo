## Tiny Procode

⚡ A procode solution for SPA (Single Page Application)

### Midleware SDK

```ts
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
```

![screenshot](./screenshot.png)

[![Edit focused-morning-ssyg5](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/focused-morning-ssyg5?fontsize=14&hidenavigation=1&theme=dark)
