import React from "react";

import classes from "./Content.css";

const Content = props => {
  let show = null;
  if (props.pragraphs) {
    show = props.pragraphs.map(pragraph => (
      <div className="theShow">
        <h3 className="subTitle"> {pragraph.title}</h3>
        <p className="subText">{pragraph.text}</p>
      </div>
    ));
  }
  return (
    <div className="content">
      <center>{show}</center>
    </div>
  );
};

export default Content;
