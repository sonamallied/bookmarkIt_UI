import * as react from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import example from "./example";
import Admin from "./Admin";
import User from "./components/common/user";

import React from "react";

export default function main() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={User} />
          <Route exact path="/user" component={User} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/example" component={example} />
        </Switch>
      </Router>
    </div>
  );
}
