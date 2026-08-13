// ============================================================
// 1. Check if JavaScript is correctly connected
// ============================================================

// This message helps us check that the JavaScript file
// is correctly connected to our HTML document.
console.log("Todo App JavaScript is connected!");


// ============================================================
// 2. Selecting an HTML element
// ============================================================

// Find the first <h1> element in the HTML document.
// The querySelector() method allows JavaScript to find an HTML element
// using a CSS selector.
//
// We can also use getElementById() or getElementsByClassName()
// to find elements.
//
// We create a variable to store the reference to the element.
// The variable name is "todoTitle".
const todoTitle = document.querySelector("h1");


// Display the selected <h1> element in the browser console.
// This helps us check that JavaScript successfully found the element.
console.log(todoTitle);


// ============================================================
// 3. Changing the content of an HTML element
// ============================================================

// Change the text content of the selected <h1> element.
// textContent replaces the text inside the element.

// todoTitle.textContent = "MY TODO APP";


// Insert plain text into the selected <h1> element.
// HTML tags inside textContent are treated as plain text.

// todoTitle.textContent = "<strong>TODO</strong>";


// ============================================================
// 4. Selecting the "All" button
// ============================================================

// Find the button with the id "all-button".
// querySelector() uses the CSS ID selector "#" to find this specific button.
const allButton = document.querySelector("#all-button");


// Display the selected button in the browser console.
// This helps us check that JavaScript successfully found the button.
console.log(allButton);


// ============================================================
// 5. Understanding Events
// ============================================================

// User clicks checkbox
//       ↓
// JavaScript detects the click
//       ↓
// JavaScript does something
//       ↓
// Todo becomes completed


// Common JavaScript events:
//
// click       → کاربر کلیک می‌کند
// input       → کاربر داخل input چیزی می‌نویسد
// change      → مقدار یک element تغییر می‌کند
// submit      → فرم submit می‌شود
// keydown     → کاربر یک کلید را فشار می‌دهد
// mouseover   → mouse روی element می‌رود


// ============================================================
// 6. Listening for a click event
// ============================================================

// Listen for a "click" event on the All button.
// When the user clicks the button, the function will run.
allButton.addEventListener("click", function () {

  // Display a message in the browser console
  // to confirm that the button was clicked.
  console.log("All button clicked!");

});


// ============================================================
// 7. Understanding addEventListener()
// ============================================================

// allButton
//     ↓
// عنصری که می‌خواهیم روی آن event داشته باشیم
//
// .addEventListener()
//     ↓
// به JavaScript می‌گوییم منتظر یک اتفاق باشد
//
// "click"
//     ↓
// نوع اتفاق
//
// function () { ... }
//     ↓
// کاری که باید بعد از اتفاق انجام شود


// ============================================================
// 8. Todo Checkbox and Completed State
// ============================================================

// Find the first Todo checkbox using its unique id.
// The "#" symbol tells querySelector() to search for an element by its id.
const todoCheckbox = document.querySelector("#todo-checkbox-1");


// Display the selected checkbox in the browser console.
// This helps us check that JavaScript successfully found the checkbox.
console.log(todoCheckbox);


// Find the Todo item that contains the checkbox.
// The ".todo-item" selector finds the first element with this class.
const todoItem = document.querySelector(".todo-item");


// Display the selected Todo item in the browser console.
// This helps us check that JavaScript successfully found the Todo container.
console.log(todoItem);


// ============================================================
// 9. Listen for Checkbox Changes
// ============================================================

// This section is kept as a learning example.
//
// We previously used classList.add() here.
// However, we no longer need this event listener
// because Section 10 uses classList.toggle().
//
// Having two change event listeners would cause
// both functions to run when the checkbox changes.

// todoCheckbox.addEventListener("change", function () {

//   // Add the "completed" class to the Todo item.
//   // This allows the CSS rule for ".todo-item.completed span"
//   // to change the appearance of the Todo text.
//   // todoItem.classList.add("completed");

// });

// ============================================================
// 10. Add and Remove the "completed" Class
// ============================================================

// Listen for a "change" event on the Todo checkbox.
// The event happens when the checkbox is checked or unchecked.
//todoCheckbox.addEventListener("change", function () {

  // Check whether the checkbox is currently checked.
  // The "checked" property returns true when the checkbox is checked
  // and false when it is unchecked.
  //if (todoCheckbox.checked) {

    // Add the "completed" class to the Todo item.
    // This allows the CSS rule for ".todo-item.completed span"
    // to change the appearance of the Todo text.
    // todoItem.classList.add("completed");

  // } else {

    // Remove the "completed" class from the Todo item.
    // This returns the Todo text to its normal appearance.
    // todoItem.classList.remove("completed");

  //}

//});

// ============================================================
// 10. Toggle the "completed" Class
// ============================================================

// Listen for a "change" event on the Todo checkbox.
// The event happens when the checkbox is checked or unchecked.
todoCheckbox.addEventListener("change", function () {

  // Toggle the "completed" class.
  //
  // If the "completed" class does not exist,
  // classList.toggle() adds it.
  //
  // If the "completed" class already exists,
  // classList.toggle() removes it.
  //
  // This allows us to handle both the checked
  // and unchecked states with one line of code.
  todoItem.classList.toggle("completed");

});
