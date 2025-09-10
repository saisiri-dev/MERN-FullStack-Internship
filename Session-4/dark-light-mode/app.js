// Select elements
const sunElement = document.getElementById('sun');
const darkBtn = document.getElementById('darkBtn');
const lightBtn = document.getElementById('lightBtn');

// Dark Mode
darkBtn.addEventListener('click', () => {
  document.body.style.background = 'black';
  document.body.style.color = 'white';
  sunElement.src = "images/moon.png";
  console.log('Dark mode activated');
});

// Light Mode
lightBtn.addEventListener('click', () => {
  document.body.style.background = 'white';
  document.body.style.color = '#111';
  sunElement.src = "images/sun.png";
  console.log('Light mode activated');
});
