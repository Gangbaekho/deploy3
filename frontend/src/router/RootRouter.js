import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "../App";
import NuitPage from "../page/NuitPage";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/nuit" component={NuitPage} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default RootRouter;
