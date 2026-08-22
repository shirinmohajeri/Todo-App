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
// because the improved version later uses classList.toggle().
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
// 11. Toggle the "completed" Class
// ============================================================

// This section is kept as a learning example.
//
// We first used this approach for one Todo item.
// Later, we improved the code so that the same logic
// works for ALL Todo items using querySelectorAll()
// and forEach().


// todoCheckbox.addEventListener("change", function () {

//   // Toggle the "completed" class on the first Todo item.
//   //
//   // This was the first version of the solution,
//   // which only worked with one Todo item.
//   // todoItem.classList.toggle("completed");

// });

// ============================================================
// 12. Selecting All Todo Items
// ============================================================

// Find all elements that have the "todo-item" class.
// querySelectorAll() finds ALL matching elements,
// not just the first one.
const todoItems = document.querySelectorAll(".todo-item");

// Display all selected Todo items in the browser console.
// This allows us to see how many Todo elements JavaScript found.
console.log(todoItems);

// ============================================================
// 13. Loop Through All Todo Items
// ============================================================

// forEach() goes through every Todo item one by one.
//
// Since todoItems contains all 6 Todo items,
// the function will run 6 times.
//
// Each time, "todoItem" represents one Todo item.
todoItems.forEach(function (todoItem) {

  // Display the current Todo item in the console.
  // This helps us see that JavaScript is visiting
  // each Todo item one by one.
  console.log(todoItem);

});

// ============================================================
// 14. Find the Checkbox of Each Todo
// ============================================================

// Go through every Todo item one by one.
todoItems.forEach(function (todoItem) {

  // Find the checkbox inside the current Todo item.
  //
  // We use querySelector() on "todoItem",
  // so JavaScript searches only INSIDE the current Todo.
  const checkbox = todoItem.querySelector('input[type="checkbox"]');

  // Display the checkbox in the console.
  // This helps us check that JavaScript found
  // the correct checkbox for each Todo.
  console.log(checkbox);

});

// ============================================================
// 15. Listen for Changes on Each Todo Checkbox
// ============================================================
// Go through every Todo item one by one.
todoItems.forEach(function (todoItem) {

  // Find the checkbox inside the current Todo item.
  const checkbox = todoItem.querySelector('input[type="checkbox"]');

  // Listen for a "change" event on the current checkbox.
  //
  // The "change" event happens when the checkbox
  // changes between checked and unchecked.
  checkbox.addEventListener("change", function () {

    // Toggle the "completed" class on the current Todo item.
    //
    // If "completed" is not there → add it.
    // If "completed" is already there → remove it.
    todoItem.classList.toggle("completed");

  });

});

// ============================================================
// 16. Selecting the New Todo Input
// ============================================================

// Find the text input used to create a new Todo.
//
// The selector finds a text input inside ".todo-input".
// This is the input where the user types a new Todo.
const todoInput = document.querySelector('.todo-input input[type="text"]');

// Display the selected input in the console.
// This helps us check that JavaScript successfully found the input.
console.log(todoInput);

// ============================================================
// 17. Read the New Todo Text
// ============================================================

// Read the text currently written inside the input.
//
// The "value" property gives us the current value
// entered by the user.
const newTodoText = todoInput.value;

// Display the entered text in the console.
// This helps us check what the user has written.
console.log(newTodoText);

// ============================================================
// 18. Understanding When the Input Value Is Read
// ============================================================

// The value of the input is read at the moment
// this line of JavaScript runs.
//
// If the input is empty when the page loads,
// the value will be an empty string ("").
console.log(todoInput.value);

// ============================================================
// 19. Listening for the "input" Event
// ============================================================

// Listen for the "input" event on the Todo input.
//
// The "input" event happens every time
// the user changes the text inside the input.
todoInput.addEventListener("input", function () {

  // Get the current value of the input.
  //
  // Every time the user types something,
  // todoInput.value contains the updated text.
  const newTodoText = todoInput.value;

  // Display the current input value in the console.
  console.log(newTodoText);

});

// ============================================================
// 20. Find the Todo List
// ============================================================

// Find the Todo list container.
const todoList = document.querySelector(".todo-list");


// ============================================================
// 21. Find Items Left
// ============================================================

// Find the element that displays the number of active Todos.
const itemsLeft = document.querySelector(".items-left");


// ============================================================
// 22. Update Items Left
// ============================================================

function updateItemsLeft() {

  // Find all Todo items.
  const allTodos = document.querySelectorAll(".todo-item");

  // Count only active Todos.
  const activeTodos = document.querySelectorAll(
    ".todo-item:not(.completed)"
  );

  // Update the number displayed on the page.
  itemsLeft.textContent = `${activeTodos.length} items left`;
}


// Run the function when the page loads.
updateItemsLeft();


// ============================================================
// 23. Detecting the Enter Key
// ============================================================

// Listen for the "keydown" event on the Todo input.
todoInput.addEventListener("keydown", function (event) {

  // Check if the user pressed Enter.
  if (event.key === "Enter") {

    // Prevent creating an empty Todo.
    if (todoInput.value.trim() === "") {
      return;
    }

    // Create a new <div> element.
    const newTodo = document.createElement("div");

    // Add the "todo-item" class.
    newTodo.classList.add("todo-item");


    // --------------------------------------------------------
    // Create Checkbox
    // --------------------------------------------------------

    // Create a checkbox for the new Todo.
    const checkbox = document.createElement("input");

    // Set the input type to checkbox.
    checkbox.type = "checkbox";


    // Listen for changes on the new Todo checkbox.
    checkbox.addEventListener("change", function () {

      // Toggle the "completed" class.
      newTodo.classList.toggle("completed");

      // Update the number of active Todos.
      updateItemsLeft();

    });


    // --------------------------------------------------------
    // Create Todo Text
    // --------------------------------------------------------

    // Create a span for the Todo text.
    const todoText = document.createElement("span");

    // Add the input text to the span.
    todoText.textContent = todoInput.value;


    // --------------------------------------------------------
    // Edit Todo
    // --------------------------------------------------------

    // Edit the Todo when the user double-clicks the text.
    todoText.addEventListener("dblclick", function () {

      // Create an input for editing.
      const editInput = document.createElement("input");

      // Put the current Todo text inside the input.
      editInput.value = todoText.textContent;

      // Replace the text with the input.
      newTodo.replaceChild(editInput, todoText);

      // Focus the input.
      editInput.focus();


      // Save the new text when Enter is pressed.
      editInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

          // Update the Todo text.
          todoText.textContent = editInput.value;

          // Replace the input with the updated text.
          newTodo.replaceChild(todoText, editInput);

        }

      });

    });


    // --------------------------------------------------------
    // Delete Button
    // --------------------------------------------------------

    // Create a delete button.
    const deleteButton = document.createElement("button");

    // Add the SVG X icon.
    deleteButton.innerHTML = `
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
        <path d="M6 6L18 18M18 6L6 18"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"/>
      </svg>
    `;


    // Delete the Todo when the button is clicked.
    deleteButton.addEventListener("click", function () {

      // Remove the Todo from the page.
      newTodo.remove();

      // Update the number of active Todos.
      updateItemsLeft();

    });


    // Add checkbox, text, and delete button to the Todo.
    newTodo.appendChild(checkbox);
    newTodo.appendChild(todoText);
    newTodo.appendChild(deleteButton);


    // Add the new Todo to the Todo list.
    todoList.appendChild(newTodo);


    // Clear the input after adding the Todo.
    todoInput.value = "";


    // Update the number of active Todos.
    updateItemsLeft();


    // Display the new Todo in the console.
    console.log(newTodo);

  }

});


// ============================================================
// 24. Add Delete Button to Existing Todos
// ============================================================

todoItems.forEach(function (todoItem) {

  // Create a delete button.
  const deleteButton = document.createElement("button");


  // Add the SVG X icon.
  deleteButton.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"/>
    </svg>
  `;


  // Delete the Todo when clicked.
  deleteButton.addEventListener("click", function () {

    // Remove the Todo from the page.
    todoItem.remove();

    // Update the number of active Todos.
    updateItemsLeft();

  });


  // Add the delete button to the Todo.
  todoItem.appendChild(deleteButton);

});