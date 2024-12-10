// Get the parent container where all sneaker cards will be displayed
const sneakerDiv = document.getElementById("sneakerDiv");

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

// Function to dynamically generate and display sneaker cards
function loadSneakers() {
    // Loop through the sneakers array to create a card for each sneaker
    sneakers.forEach((sneaker) => {
      // Create a div element for the sneaker card
      const card = document.createElement("div");
      card.className = "sneaker-card"; // Add a class for styling
      card.dataset.id = sneaker.id; // Store the unique sneaker ID in a data attribute
  
      // Add the sneaker's content to the card using innerHTML
      card.innerHTML = `
        <img src="./sneakerImages/${sneaker.image}" alt="${sneaker.name}"> <!-- Sneaker image -->
        <div class="info">
          <h2>${sneaker.name}</h2> <!-- Sneaker name -->
          <p>${sneaker.description}</p> <!-- Sneaker description -->
          <p class="price">$${sneaker.price}</p> <!-- Sneaker price -->
        </div>
      `;
  
      // Append the card to the parent container
      sneakerDiv.appendChild(card);
    });
  }
  
  // Add a click event listener to the parent container (event delegation)
  sneakerDiv.addEventListener("click", (e) => {
    // Check if the clicked element is inside a sneaker card
    const card = e.target.closest(".sneaker-card");
    if (card) {
      // Get the unique ID of the clicked sneaker from its data-id attribute
      const sneakerId = card.dataset.id;
      // Log the sneaker ID to the console
      console.log(`You clicked on sneaker with ID: ${sneakerId}`);
    }
  });
  
  // Call the function to load sneakers when the page loads
  loadSneakers();
  
  