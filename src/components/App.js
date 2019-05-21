import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Unauthorized from "./pages/Unauthorized";

class App extends Component {
  render() {
    return (
      <Switch location={this.props.location}>
        <Route path="/" exact component={Home} />
        <Route path="/401" exact component={Unauthorized} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default withRouter(App);
