import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./Components/App";
import { MemoryRouter as Router, Route } from "react-router-dom";
ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById("root") as HTMLElement
);
