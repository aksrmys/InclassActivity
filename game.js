const button = document.getElementById('button');
const score = document.getElementById('score');

let counter = 0;
let level = 1;
let timeout = 500;

button.addEventListener('click', () => {
  counter++;
  if (counter === 3) {
    counter = 0;
    level++;
    timeout -= 100;
    alert(`Level: ${level-1} is done!`);
    if (level > 3) {
      alert(`You won the Game`);
    }
  }
  moveButton();
});


function moveButton() {
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    const x = Math.random() * (window.innerWidth - buttonWidth);
    const y = Math.random() * (window.innerHeight - buttonHeight);
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;
    button.style.marginTop = `${Math.min(y, maxY)}px`;
    button.style.marginLeft = `${Math.min(x, maxX)}px`;
    if (timeout > 0) {
      setTimeout(moveButton, timeout);
    }
  }
  
