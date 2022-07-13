import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./Admin/Authentification/Login";
import Interface from "./Admin/Interface/Interface";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

        <Route path="/admin" component={Interface} />
        <Route path="/" component={Login} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
