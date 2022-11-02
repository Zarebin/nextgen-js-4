import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Home from "./components/User/Home";

function App() {
  return (
    <Fragment>
      <Route exact path="/">
        <Home />
      </Route>
    </Fragment>
  );
}

export default App;
