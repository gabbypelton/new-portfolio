import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";
import App from "./App";
import rootReducer from "./reducers/store";
import * as serviceWorker from "./serviceWorker";

const store = createStore(rootReducer);

ReactDOM.render(
  <Router basename="/">
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
