## Tiny Procode

⚡ A procode solution for SPA (Single Page Application)

Your libs

```ts
function Button() {
  ...
}

export default midleware(Button);
```

Write the snipit withe monaco editor:

```
window.pcComponentsConfig = {
  Button: {
    /**
     * 复写：仅仅代理组件 props，维持组件基本形态
     * @param {*} newProps
     */
    rewriteFn: (newProps) => {
    
      // todo ...
      return newProps
    },
    /**
     * 重构：完全替换当前组件，适用于改动较大的版块
     * @param {*} Com
     * @param {*} newProps
     */
    refactorFn: (Com, newProps) => {
      // todo ...
      
      return {
        com: NewCom,
        props: newProps
      };
    }
  },
  Foo: {
    rewriteFn: (newProps) => {
      // todo ...
      
      return {
        ...newProps,
        children: <i>bar</i>
      };
    }
  }
};
```

![screenshot](./screenshot.png)

[![Edit focused-morning-ssyg5](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/focused-morning-ssyg5?fontsize=14&hidenavigation=1&theme=dark)
