import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ListOfHouses from "./pages/ListOfHouses";
import HomeDetail from "./pages/HomeDetail";
import HouseAdd from "./pages/HouseAdd";

const BaseRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/list" component={ListOfHouses} />
        <Route exact path="/list/:id" component={HomeDetail} />
        <Route exact path="/addHouse" component={HouseAdd} />
      </Switch>
    </>
  );
};

export default BaseRouter;
