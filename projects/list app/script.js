// Get the add button and input field elements
const addButton = document.getElementById('add-button');
const inputField = document.getElementById('input-text');
const listContainer = document.getElementById('list-container');

// Add an event listener to the add button
addButton.addEventListener('click', addItem);

// Define the addItem function
function addItem() {
  // Get the input value
  const inputValue = inputField.value.trim();

  // Check if the input value is not empty
  if (inputValue!== '') {
    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = inputValue;

    // Append the new list item to the list container
    listContainer.appendChild(listItem);

    // Clear the input field
    inputField.value = '';
  }
}