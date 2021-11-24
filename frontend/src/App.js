import { Box } from "@chakra-ui/react";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from "./Home";
const App = () => {
  const routes = (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Redirect to="/" />
    </Switch>
  );
  return (
    <Router>
      <main>{routes}</main>
    </Router>
  );
};

export default App;
