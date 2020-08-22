import React from "react";
import { Switch, Route } from "react-router-dom";

// components

import Join from "./components/Join/Join.jsx";
import Chat from "./components/Chat/Chat.jsx";

const App = () => (
  <Switch>
    <Route path="/" exact component={Join} />
    <Route path="/chat" component={Chat} />
  </Switch>
);

export default App;
