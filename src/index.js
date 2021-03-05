import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Auth from "./Components/Auth/Auth";
import Dash from "./Components/Dash/Dash";
import Form from "./Components/Form/Form";
import Post from "./Components/Post/Post";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
