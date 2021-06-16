/**
 * 无侵入二次开发代码片段
 */
window.pcComponentsConfig = {
  Button: {
    /**
     * 复写：仅仅代理组件 props，维持组件基本形态
     * @param {*} newProps
     */
    rewriteFn: (newProps) => {
      if (!window.location.pathname.includes("rewrite")) return;
      return {
        ...newProps,
        danger: true,
        children: <i>Rewrited it</i>,
        onClick: () => window.alert("Rewrited it !")
      };
    },
    /**
     * 重构：完全替换当前组件，适用于改动较大的版块
     * @param {*} Com
     * @param {*} newProps
     */
    refactorFn: (Com, newProps) => {
      if (!window.location.pathname.includes("refactor")) return;
      const { antd } = window;
      const { DatePicker, version } = antd;
      const NewCom = (props) => {
        return (
          <div className="App">
            <h1>antd version: {version}</h1>
            <DatePicker />
            <Com {...props} type="dashed" style={{ marginLeft: 8 }} />
            <p style={{ paddingTop: "1rem" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate harum molestiae totam ab sequi dolor praesentium
              similique quod ipsum a perferendis inventore eius assumenda
              nesciunt distinctio incidunt deleniti, illo eos!
            </p>
          </div>
        );
      };
      return {
        com: NewCom,
        props: newProps
      };
    }
  },
  Foo: {
    rewriteFn: (newProps) => {
      if (!window.location.pathname.includes("foo")) return;
      return {
        ...newProps,
        children: (
          <i>
            Rewited {newProps.children} as <b>bar</b>
          </i>
        )
      };
    }
  }
};

/**
 * Todo List:
 * 1. Write ES6 In Web IDE -> @babel/standalone -> ES5
 * 2. Multi customize -> UUID -> Queue -> comMap<{ uuid: T }>
 */
