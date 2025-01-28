const clickButton = document.getElementById('clickButton');
const clickCountDisplay = document.getElementById('clickCount');

// Initialize count
let clickCount = 0;

// Add event listener for button click
clickButton.addEventListener('click', () => {
  clickCount++; // Increment count
  clickCountDisplay.textContent = clickCount; // Update display
});
i making some chnges to dhis page so i think every one will satisfy.
