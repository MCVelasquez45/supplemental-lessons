# Lesson: Event Delegation in JavaScript

## Learning Objectives
By the end of this lesson, students will be able to:

Understand the concept of event delegation and how it works in JavaScript.
Dynamically generate elements and manage events for these elements efficiently.
Create a functional sneaker catalog application where clicking a sneaker card logs its unique ID.
Glossary
Event Delegation
A technique in JavaScript where a single event listener is attached to a parent element to handle events for its child elements. It takes advantage of event bubbling.

## Event Bubbling
The process by which an event starts at the target element and propagates upwards through its ancestors in the DOM.

## Data Attribute
Custom attributes added to HTML elements to store data (data-*). They are accessible in JavaScript using dataset.

## Code Walkthrough
HTML Setup
We start by creating the basic structure of the application. The <div> with id="sneakerDiv" is where the sneaker cards will be dynamically added.

```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sneaker Catalog</title>
  <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
  <header>
    <h1>Sneaker Catalog</h1>
  </header>
  <main>
    <div id="sneakerDiv" class="sneaker-container"></div>
  </main>
  <script src="./js/main.js"></script>
</body>
</html>
```
## CSS Styling
Next, style the sneaker catalog to make it visually appealing.

```CSS

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

header {
  background-color: #333;
  color: white;
  padding: 10px 0;
  text-align: center;
}

.sneaker-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  gap: 20px;
}

.sneaker-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 250px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
  text-align: center;
}

.sneaker-card:hover {
  transform: scale(1.05);
}

.sneaker-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.sneaker-card .info {
  padding: 15px;
}

.sneaker-card .info h2 {
  font-size: 18px;
  margin: 10px 0 5px;
  font-weight: bold;
  color: #333;
  text-transform: capitalize;
}

.sneaker-card .info p {
  margin: 5px 0;
  font-size: 14px;
  color: #666;
  line-height: 1.4;
}

.sneaker-card .info .price {
  color: #333;
  font-weight: bold;
  margin-top: 10px;
  font-size: 16px;
  background-color: #f9f9f9;
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
```
## JavaScript Functionality
1. Array of Sneaker Objects
Start by defining an array containing sneaker data. Each object contains details about the sneaker (name, price, description, image, and unique ID).

```javascript

// Array of sneaker objects, each representing a shoe with its details
const sneakers = [
  {
    name: "Nike Dunk High Retro",
    price: 120,
    description: "Yellow and navy classic sneakers.",
    image: "./nike-blue-yellow.jpg", // Path to the image
    id: "sneaker1", // Unique identifier for the sneaker
  },
  {
    name: "Air Jordan High",
    price: 150,
    description: "Multi-color Jordan 1.",
    image: "./nike-hightop.jpg",
    id: "sneaker2",
  },
  {
    name: "Nike Air Max",
    price: 140,
    description: "Iconic blue Air Max.",
    image: "./nike-airmax.jpg",
    id: "sneaker3",
  },
  {
    name: "Jordan 1 Yellow",
    price: 160,
    description: "Bold yellow Jordan 1s.",
    image: "./jordan1-yellow.jpg",
    id: "sneaker4",
  },
  {
    name: "Jordan 5 Red",
    price: 180,
    description: "Classic white and red Jordans.",
    image: "./jordan-kicks.jpg",
    id: "sneaker5",
  },
  {
    name: "Jordan 4 Black",
    price: 200,
    description: "Sleek black and red Jordans.",
    image: "./jordan4-Black.jpg",
    id: "sneaker6",
  },
  {
    name: "Jordan 4 White",
    price: 190,
    description: "Clean and stylish white Jordans.",
    image: "./jordan4.jpg",
    id: "sneaker7",
  },
  {
    name: "Nike Air Force 1",
    price: 130,
    description: "Colorful and fun Air Force 1s.",
    image: "./nike-shoes.jpg",
    id: "sneaker8",
  },
];

2. Dynamically Generate Sneaker Cards
Create a function loadSneakers to loop through the sneaker array and generate cards.

javascript

// Function to dynamically generate and display sneaker cards
function loadSneakers() {
  // Loop through the sneakers array to create a card for each sneaker
  sneakers.forEach((sneaker) => {
    // Create a div element for the sneaker card
    const card = document.createElement("div");
    card.className = "sneaker-card"; // Add a class to the div for styling
    card.dataset.id = sneaker.id; // Store the unique sneaker ID in a data attribute for easy access later

    // Add the sneaker's content (image, name, description, price) to the card using innerHTML
    card.innerHTML = `
      <img src="./sneakerImages/${sneaker.image}" alt="${sneaker.name}"> <!-- Sneaker image -->
      <div class="info">
        <h2>${sneaker.name}</h2> <!-- Sneaker name -->
        <p>${sneaker.description}</p> <!-- Sneaker description -->
        <p class="price">$${sneaker.price}</p> <!-- Sneaker price -->
      </div>
    `;

    // Append the generated card to the parent container (sneakerDiv)
    sneakerDiv.appendChild(card);
  });
}

// Add a click event listener to the parent container (sneakerDiv) to handle clicks on sneaker cards
sneakerDiv.addEventListener("click", (e) => {
  // Use event delegation to check if the click happened inside a sneaker card
  const card = e.target.closest(".sneaker-card"); // Find the nearest parent with the class 'sneaker-card'
  if (card) {
    // Get the unique ID of the clicked sneaker from its data-id attribute
    const sneakerId = card.dataset.id;
    // Log the sneaker ID to the console for debugging or further processing
    console.log(`You clicked on sneaker with ID: ${sneakerId}`);
  }
});

// Call the function to dynamically load and display sneakers when the page loads
loadSneakers();


```

# What Does .closest() Do?
The .closest() method is used to find the nearest parent element (or the element itself) that matches a specified CSS selector. In our case, .closest(".sneaker-card") checks if the clicked element or one of its ancestors has the class sneaker-card.

This is helpful for identifying which specific card was clicked, even if the user clicks on a child element like an image or text.

## Teacher.md: Answers to Check for Understanding
1. What is the purpose of the document.getElementById method in the context of this project?
  - The document.getElementById method is used to select the parent container (sneakerDiv) where all dynamically created sneaker cards will be added. This provides a reference point for manipulating the DOM.
2. Why do we use forEach to loop through the sneakers array instead of a traditional for loop?
  - forEach is a cleaner and more readable way to iterate over arrays in JavaScript. It allows us to focus on each individual sneaker object directly without needing to manage loop counters.
3. What is the purpose of the data-id attribute, and how is it used in this project?
  - The data-id attribute stores a unique identifier for each sneaker card. This allows us to identify which sneaker was clicked during the event delegation process.
4. Why do we add an event listener to the parent container (sneakerDiv) instead of adding it to each individual card?
  - Adding the event listener to the parent container leverages event delegation, which is more efficient. Instead of attaching an event listener to every card, we attach one listener to the parent, which can handle events for all its child elements.
5. What does e.target.closest(".sneaker-card") do, and why is it important for event delegation?
  - e.target.closest(".sneaker-card") finds the closest ancestor element with the class sneaker-card from the clicked target. It ensures we can identify the specific card that was clicked, even if the click occurred on a nested child element within the card. This is critical for event delegation to work correctly.