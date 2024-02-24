import React from "react";
import ReactDOM from "react-dom";

var customStyle = {
  color: "red",
  fontSize: "50px",
  fontWeight: "bold",
  textAlign: "center",
};

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);