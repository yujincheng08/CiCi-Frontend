import { render } from "react-dom";
import { Provider } from "mobx-react";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import App from "components/App";
import STORE from "store";

render(
  <Router>
    <Provider store={STORE}>
        <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
