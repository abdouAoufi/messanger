import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import GetStarted from "../pages/Get-started/GetStarted";
import Setup from "../pages/Setup/Setup";
import { AuthContextProvider } from "../context/Auth/Auth";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/setup" component={Setup} />
          <Route path="/" component={GetStarted} />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
