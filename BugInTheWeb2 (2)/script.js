function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('open');
}

// script.js
const catFacts = [
  "Cats can sleep up to 70% of their lives!",
  "Cats have a special reflective layer behind their retinas, improving night vision.",
  "Cats are natural predators and can catch around 1,000 mice in a year!",
  "PEEL OFF YOUR SKIN!",
  "I AM IN YOUR WALLS",
  "LOOK BEHIND YOU",
  "I KNOW WHERE YOU LIVE",
  "Cats are very fluffy!",
  "YOU HAVE 37 HOURS LEFT ALIVE",
  "Cats are so cute!",
  "A group of kittens is called a “kindle.“",
  "Cats can jump up to 6 times their height.",
  "Cats are alive",
  "Cats have 230 bones!"

  // Add more cat facts here
];

function generateCatFact() {
  const factElement = document.getElementById('fact');
  const randomFact = catFacts[Math.floor(Math.random() * catFacts.length)];
  factElement.textContent = randomFact;
}

let moveCount = 0;
let isMoving = false;
let moveInterval;
let percentage = 0;
const loadingBar = document.getElementById('loadingBar');
const showButton = document.getElementById('showButton');
const button = document.getElementById('moveButton');
let colorIndex = 0;
const colors = ['red', 'green', 'blue', 'orange', 'purple'];
const bounds = {
    left: 0,
    right: window.innerWidth - button.clientWidth,
    top: 0,
    bottom: window.innerHeight - button.clientHeight
};

function showMoveButton() {
    showButton.style.display = 'none';
    button.style.display = 'block'; // Make the button visible
}

function showLoadingBar() {
  loadingBar.style.display = 'block';
}

function moveButton() {
    if (isMoving) {
        moveCount++;
    } else {
        moveCount = 1;
        isMoving = true;
        button.textContent = ";)";

        moveInterval = setInterval(() => {
            const maxX = window.innerWidth - button.clientWidth;
            const maxY = window.innerHeight - button.clientHeight;
            const randomX = Math.random() * maxX;
            const randomY = Math.random() * maxY;
            button.style.left = randomX + 'px';
            button.style.top = randomY + 'px';
        }, 1000); // Slower movement with 1000 milliseconds interval
    }
    percentage += 10;
    updateLoadingBar();
}

function updateLoadingBar() {
    if (percentage >= 100) {
        percentage = 100;
        loadingBar.textContent = `Loading: ${percentage}%`;
        loadingBar.style.width = percentage + '%';

        alert("YOU WIN!");
        window.location.href = "index.html"; 

    } else {
        loadingBar.textContent = `Loading: ${percentage}%`;
        loadingBar.style.width = percentage + '%';
    }
}