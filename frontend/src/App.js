import React from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "./components/navigation";
import Home from "./components/Home";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/profile" render={() => <Profile/>} />
        </Switch>
      </div>
    </>
  );
};

export default App;
