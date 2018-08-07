import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import classes from "./Menu.css";

class MenuItem extends Component {
  openHandler = () => {};

  render() {
    let theItem = null;

    if (this.props.sub) {

    }
     else {
      theItem = (
        <NavLink to={this.props.link}>
          <li className="sItem">{this.props.text}</li>
        </NavLink>
      );
    }
    return <React.Fragment>{theItem}</React.Fragment>;
  }
}

export default MenuItem;
