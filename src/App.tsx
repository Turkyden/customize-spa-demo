import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, Foo } from "./components";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Standard</Link>
          </li>
          <li>
            <Link to="/rewrite">Rewrite</Link>
          </li>
          <li>
            <Link to="/refactor">Refactor</Link>
          </li>
          <li>
            <Link to="/foo">Foo</Link>
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
            <Foo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
