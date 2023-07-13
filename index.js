// The DOM = Document Object Model -- aka how you use JS to modify a website //

// document.getElementById("count-el").innerText = 5;

// STEPS NEEDED HERE: //
// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// camelCase
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el"); // pass in arguments
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

// 1. Create a function, save(), which logs out the count when it's called
function save() {
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 -
  let countStr = count + " , ";
  // 3. Render the variable in the saveEl using innerText initially, but look at styling issues
  // 4. Google: innerText alternative mdn
  saveEl.textContent += countStr;
  // 5. Final Step: Set the count back to 0 once an increment has been saved
  countEl.textContent = 0;
  count = 0;
}










