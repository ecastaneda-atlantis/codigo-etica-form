import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import left from "./assets/img/left.png";
import right from "./assets/img/right.png";

import Home from "./Home";
const App = () => {
  const imgSize = useBreakpointValue({
    base: "0rem",
    xs: "15rem",
    sm: "10rem",
    md: "15rem",
    lg: "15rem",
    xl: "20rem",
    "2xl": "30rem",
  });
  const routes = (
    <Switch>
      <Route basename={"/expresate"} exact path="/expresate">
        <Box>
          <Home />
          <Image
            src={left}
            maxW={imgSize}
            position="absolute"
            top="0"
            left="0"
            zIndex="-1"
          ></Image>
          <Image
            src={right}
            maxW={imgSize}
            position="absolute"
            bottom="0"
            right="0"
            zIndex="-1"
          ></Image>
        </Box>
      </Route>

      <Redirect to="/expresate" />
    </Switch>
  );
  return (
    <Router>
      <main>{routes}</main>
    </Router>
  );
};

export default App;
