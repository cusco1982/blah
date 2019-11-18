import React, { Component } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Properties from "./pages/Properties";
import Tenants from "./pages/Tenants";
import Contacts from "./pages/Contacts";
import Admin from "./pages/Admin";
import Tenant from "./pages/Tenant";
import Register from "./pages/Register";


// import Profile from './components/Profile';
// import Dashboard from './components/Dashboard';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Home from './components/Home';
// import NotFound from './components/NotFound';


import "./css/style.css"




export default class App extends Component {
  render() {

    return (
      <Router>
        <div>
          <Nav />
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/properties" component={Properties} />
              <Route exact path="/Tenants" component={Tenants} />
              <Route exact path="/Contact" component={Contacts} />
              <Route exact path="/Admin" component={Admin} />
              <Route exact path="/Tenant" component={Tenant} />
              <Route exact path="/Register" component={Register} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  };
}
