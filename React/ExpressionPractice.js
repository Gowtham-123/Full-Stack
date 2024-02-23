import React from "react";
import ReactDom from "react-dom";

var name = "Gowtham";
var currentDate = new Date();
var year = currentDate.getFullYear();

ReactDom.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
