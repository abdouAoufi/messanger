import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import GetStarted from "../pages/Get-started/GetStarted";
import Setup from "../pages/Setup/Setup";
import { AuthContextProvider } from "../context/Auth/Auth";
import { createBrowserHistory } from "history";
import io from "socket.io-client/dist/socket.io.js";

var hist = createBrowserHistory();

function App() {
 
  return (
    <AuthContextProvider>
      <Router history={hist}>
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
