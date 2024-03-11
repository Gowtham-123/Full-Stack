var guestList = ["Gowtham", "Chandu", "Ganesh", "Rudh", "Yashwanth", "Madhav"];
var name = prompt("Please Enter Your Name ");
if (guestList.includes(name)){
    alert("Welcome!");
}else {
    alert("Sorry may be next time.");
}

/* Interview Questions : Deep Quality Check */

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (obj1 == null || typeof obj1 != "object" || obj2 == null || typeof obj2 != "object") {
    return false;
  }

  let keysObj1 = Object.keys(obj1), keysObj2 = Object.keys(obj2);

  if (keysObj1.length != keysObj2.length) {
    return false;
  }

  for (let key of keysObj1) {
    if (!keysObj2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

// Usage example
console.log(deepEqual({a: 1, b: {c: 5}}, {a: 1, b: {c: 5}})); // true
console.log(deepEqual({a: 1, b: {c: 5}}, {a: 1, b: {c: 6}})); // false

/* Throttling and Debouncing : */
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Usage example
window.addEventListener('resize', throttle(function(evt) {
  console.log(window.innerWidth);
  console.log(window.innerHeight);
}, 1000));
