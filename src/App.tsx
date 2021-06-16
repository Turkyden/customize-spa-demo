import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Foo } from "./components";

export default function App() {
  return (
    <Router>
      <div style={{ padding: "2rem" }}>
        <ul>
          <li>
            <Link to="/">Standard Component</Link>
          </li>
          <li>
            <Link to="/rewrite">Rewrite Standard Component</Link>
          </li>
          <li>
            <Link to="/refactor">Refactor Standard Component</Link>
          </li>
          <li>
            <Link to="/foo">Rewrite Customized Component</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Button type="primary">Button</Button>
          </Route>
          <Route path="/rewrite">
            <Button type="primary">Button</Button>
          </Route>
          <Route path="/refactor">
            <Button type="primary">Button</Button>
          </Route>
          <Route path="/foo">
            <Foo>foo</Foo>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
