import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Container } from "@chakra-ui/react";
import Home from "./Home";
const App = () => {
  const routes = (
    <Switch>
      <Route exact path="/">
        <Container
          mt={5}
          p={5}
          borderRadius={10}
          boxShadow="0 8px 8px 4px rgba(0,0,0,0.2)"
        >
          <Home />
        </Container>
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
