import React from "react";
import ReactDOM from "react-dom";

const fName = "Gowtham";
var lName = "D";
var number = 7;

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}</h1>
    <p>Your Lucky Number is {64964 + 6546 + 5}</p>
  </div>,
  document.getElementById("root")
);
