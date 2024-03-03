// Very simple example for potential interactive elements later:
const heroButton = document.querySelector('#hero button');

heroButton.addEventListener('mouseover', () => {
    heroButton.style.backgroundColor = '#2ecc71'; // Example - changes button color
});

heroButton.addEventListener('mouseout', () => {
    heroButton.style.backgroundColor = '#2980b9'; // Reverts to original color 
});

