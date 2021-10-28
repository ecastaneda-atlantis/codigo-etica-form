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
      <Box
        background={
          "linear-gradient(170deg, rgba(2,0,30,1) 0%, rgba(12,70,82,1) 100%)"
        }
        height={'100vh'}
      >
        <main>{routes}</main>
      </Box>
    </Router>
  );
};

export default App;
