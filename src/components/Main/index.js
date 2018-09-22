import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Series from "../../containers/Series";
import SeriesDetails from "../../containers/SeriesDetails";
import PersonDetails from "../../containers/personDetails";

const Main = props => (
  <Switch>
    <Route exact path="/" component={Series} />
    <Route path="/show/:id" component={SeriesDetails} />
    <Route path="/person/:id" component={PersonDetails} />
  </Switch>
);

export default Main;
