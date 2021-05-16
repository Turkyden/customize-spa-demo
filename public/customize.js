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
      const { Button, version } = antd;

      const NewCom = (props) => {
        return (
          <div className="App">
            <h1>antd version: {version}</h1>
            <Button type="primary" style={{ marginLeft: 8 }}>
              Primary Button
            </Button>
          </div>
        );
      };
      return {
        com: NewCom,
        props: newProps
      };
    }
  }
};

/**
 * Todo List:
 * 1. Write ES6 In Web IDE -> @babel/standalone -> ES5
 * 2. Multi customize -> UUID -> Queue -> comMap<{ uuid: T }>
 */
