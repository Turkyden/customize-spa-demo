## Tiny Procode

⚡ A procode solution for SPA (Single Page Application)

### Step 1

Add the **midleware** for Your Button in UI library:

```ts
function Button() {
  // ...
}

export default midleware(Button);
```

### Step 2

Write the code snippet with the online web editor (monaco):

```js
window.pcComponentsConfig = {
  Button: {
    /**
     * Rewrite the component and just replace some props.
     * @param {*} newProps
     */
    rewriteFn: (newProps) => {
      // todo ...
      
      return newProps
    },
    /**
     * Refactor the component and make a great change.
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

### Step 3

Reload the browser and load the new version of `customize.js`.

![screenshot](./screenshot.png)

[![Edit focused-morning-ssyg5](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/focused-morning-ssyg5?fontsize=14&hidenavigation=1&theme=dark)
