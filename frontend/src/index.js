import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";


const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat'
  }
};

const theme = extendTheme({ config });

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
