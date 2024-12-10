# Student Review: Weekly Concepts Overview

## Lesson: Building a To-Do List Application

### Overview:
This week, we focused on building a simple To-Do List application using HTML, CSS, and JavaScript. This exercise was designed to review core concepts related to the Document Object Model (DOM), event handling, and data management in a front-end application.

### Key Concepts Covered:

#### 1. **HTML Structure**
   - Basic semantic structure of an HTML document:
     - Use of `<input>` for task entry.
     - `<button>` for triggering actions.
     - `<ul>` for displaying the list of tasks.
   - Linking external CSS and JavaScript files.

#### 2. **CSS Styling**
   - Styling HTML elements using selectors:
     - Styling input fields, buttons, and list items.
     - Adding hover effects to buttons.
   - Managing layout and design for better user experience.

#### 3. **JavaScript for Interactivity**
   - Adding interactivity to the To-Do List application:
     - Using event listeners to capture user actions.
     - DOM manipulation to update the interface dynamically.
   
#### 4. **Data Model**
   - **Definition**: The data model serves as the single source of truth for managing application data.
   - **Implementation**: Using an object (`dataModel`) to store and manage tasks.

#### 5. **Reusable Functions**
   - Creating functions for reusability:
     - `displayTodos()`: Refreshes the UI by iterating over the `dataModel`.
     - `addTodo(task)`: Updates the `dataModel` and calls `displayTodos()`.
   
#### 6. **Helper Functions**
   - Defining helper functions to manage the data model:
     - `addTodoFromInput()`: Handles user input, validates it, and calls `addTodo()`.

### Learning Objectives

By the end of this session, learners will be able to:

- Explain the concept of a Data Model in an application.
- Utilize a Data Model as the single source of truth for managing application data.
- Create reusable functions to display data from a Data Model.
- Write helper functions to update a Data Model effectively.

### Code Implementation:

#### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div>
        <input id="todoInput" type="text" placeholder="Add a task">
        <button id="addTodoButton">Add</button>
    </div>

    <ul id="todoList"></ul>
    <script src="./js/main.js"></script>
</body>
</html>
```

#### CSS
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    color: #333;
    margin: 20px;
}

div {
    margin-bottom: 10px;
}

input {
    padding: 5px;
    font-size: 16px;
}

button {
    padding: 5px 10px;
    margin-left: 5px;
    font-size: 16px;
    cursor: pointer;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 3px;
}

button:hover {
    background-color: #0056b3;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    padding: 5px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 3px;
}

li button {
    background-color: #dc3545;
}

li button:hover {
    background-color: #c82333;
}
```

#### JavaScript
```javascript
// Add event listener to the button
document.getElementById('addTodoButton').addEventListener('click', addTodoFromInput);

// Define the function to handle user input
function addTodoFromInput() {
    const input = document.getElementById('todoInput');
    const task = input.value.trim();

    if (!task) {
        alert('Task cannot be empty!');
        return;
    }

    addTodo(task); // Update data model and refresh UI
    input.value = ''; // Clear the input field
}

// Define addTodo function to update the data model
function addTodo(task) {
    dataModel.todos.push(task);
    displayTodos(); // Refresh UI
}

// Example data model and displayTodos function
const dataModel = {
    todos: []
};

function displayTodos() {
    const list = document.getElementById('todoList');
    list.innerHTML = ''; // Clear existing items

    dataModel.todos.forEach((todo, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${todo}`;

        list.appendChild(listItem);
    });
}
```

