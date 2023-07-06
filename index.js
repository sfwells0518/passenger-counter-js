// The DOM = Document Object Model -- aka how you use JS to modify a website //

// document.getElementById("count-el").innerText = 5;

// STEPS NEEDED HERE: //
// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el"); // pass in arguments

// test below via console.log to see if countEl is working properly //
// console.log(countEl);

let count = 0;

function increment() {
  count = count + 1;
  countEl.innerText = count;
}

