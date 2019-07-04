import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Auth from "../Pages/Auth";

import MainApp from "../Pages/App";
import Inicio from "../Pages/App/Inicio";

const Main = ({ component: Component, props }) => {
  return (
    <MainApp {...props}>
      <Route component={Component} {...props} />
    </MainApp>
  );
};

const Routes = props => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Auth} />
      <Main path="/inicio" component={Inicio} {...props} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
