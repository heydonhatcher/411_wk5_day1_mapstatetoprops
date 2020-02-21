import React from "react";
import { Switch, Route } from "react-router";
import Home from "./containers/Home";
import Dashboard from "./containers/Dashboard";
import Car from "./containers/Car";
import About from "./components/About";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/car/:id" component={Car} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Router;
