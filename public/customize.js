window.pcComponentsConfig = {
  Button: {
    rewriteFn: (newProps) => {
      if (!window.location.pathname.includes("rewrite")) return;
      return {
        ...newProps,
        danger: true,
        children: <i>Rewrited</i>,
        onClick: () => window.alert("Rewrited")
      };
    },
    refactorFn: (Com, newProps) => {
      if (!window.location.pathname.includes("refactor")) return;
      const { antd } = window;
      const { DatePicker, version } = antd;
      const NewCom = (props) => {
        return (
          <div className="App">
            <h1>antd version: {version}</h1>
            <DatePicker />
            <Com type="primary" style={{ marginLeft: 8 }}>
              Primary Button
            </Com>
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
        children: <i>bar</i>
      };
    }
  }
};

/**
 * Todo List:
 * 1. Write ES6 In Web IDE -> @babel/standalone -> ES5
 * 2. Multi customize -> UUID -> Queue -> comMap<{ uuid: T }>
 */
