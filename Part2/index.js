console.log('The House Always Wins!');

let id = document.getElementById('idInput')
let color = document.getElementById('colorInput')

console.log(id);
console.log(color);

function setCard() {
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
  }