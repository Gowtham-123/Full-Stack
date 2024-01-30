var name = prompt("What is your name ?");

var firstChar = name.slice(0,1);

var upperCase = firstChar.toUpperCase();

var restOfName = name.slice(1,name.length);

restOfName = restOfName.toLowerCase();

var capName = upperCase + restOfName

alert("Hello " + capName);