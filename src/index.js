import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { GlobeContainer } from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <GlobeContainer />
  </StrictMode>,
  rootElement
);
