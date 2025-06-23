const items = document.querySelectorAll('li');
// It selects all <li> elements from the page using CSS selector syntax.
// It returns a NodeList — a collection (like array) of DOM nodes
console.log(items); // NodeList(3) [li, li, li]

items[0].innerHTML; //seee the result


// What is a Node List
// It is not a real array, but array-like
// You can loop over it using forEach(), for...of
// But it does not support full array methods like map(), filter() unless you convert it

// NodeList returned by querySelectorAll() is static, meaning it doesn’t auto-update if DOM changes.


// Common mistake
//   document.querySelectorAll('li').style.color = "blue";
// Error: NodeList has no style

document.querySelectorAll('li').forEach(li => li.style.color = "blue");

