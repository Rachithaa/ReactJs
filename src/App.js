import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./components/Home";
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-primary">
          <Link className="navbar-brand ">
            LIVE THE LIFE
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item dark">
            <Link to={"/Home"} className="nav-link dark">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Signup"} className="nav-link">
                SIGN UP
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Signin"} className="nav-link ">
                SIGN IN
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
          <Route exact path={"/home"} component={Home} />
            <Route exact path={"/signin"} component={Signin} />
            <Route exact path={"/signup"} component={Signup} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
