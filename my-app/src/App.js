import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router";

import layout from "./layout/layout";
import Main from "./components/main/Main";
import ContactMe from "./components/personal/ContactMe";
import WhoAmI from "./components/personal/WhoAmI";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={layout} />
        <Route exact path="/" component={Main} />
        <Route path="/whoAmi" component={WhoAmI} />
        <Route path="/contact_me" component={ContactMe} />


      </div>
    );
  }
}

export default App;
