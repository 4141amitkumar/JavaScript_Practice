document.getElementById('title');
document.getElementById('title').className   //'heading'

document.getElementById('title').getAttribute('id')  //'title'
document.getElementById('title').getAttribute('class')  //'heading'
document.getElementById('title').setAttribute('class','test heading') //undefined
// 6th line will change the class of tag with id title to test heading

const title = document.getElementById('title');
title.style.backgroundColor = 'green';
title.style.padding = "15px";
title.style.borderRadius = "15px";

title.textContent;   // 'DOM learning is good to practise'
title.innerText;   // 'DOM learning is good'


// textContent Includes hidden text, faster , doesn't respect CSS
// innerHTML Ignores hidden elements, slower, and respects CSS

title.innerHTML  //'DOM learning is good<span style="display: none"> to practise</span>'


//********************************************************************* */

document.querySelector('h2');
// document.querySelector('h2') selects the first <h2> element from the HTML page.
// It is a DOM selection method that returns the first matching element based on a CSS selector.
// If no element matches, it returns null (not error).

document.querySelector('#title');   // # used to select id
document.querySelector('.heading'); // . used to select class

document.querySelector('input[type="password"]'); // ye bhi kaam krega, if there is something like this in html file


// mast mast
const myul = document.querySelector('ul');
const myli = myul.querySelector('li');
myli.style.backgroundColor = "green";
myli.innerText = "Five";