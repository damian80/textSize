//1. pobieramy wszystkie potrzebne elementy z DOM (document object model)
// czyli BUTTON powieksz,BUTTON pomniejsz i P piszemy zmienne czyli VARIABLES
let btnIncrease = document.querySelector('.bigger');
let btnDecrease = document.querySelector('.smaller');
let text = document.querySelector('p');

// 1b. okreslamy potrzebne dane
//  (poczatkowa wielkosc fonta dla P)
let textSize = 16;

// 2.Okreslenie akcji - napisanie funkcji
function textIncrease() {
    textSize++;
    text.style.fontSize = textSize + "px";
}

function textDecrease() {
    textSize--;
    text.style.fontSize = textSize + "px";
}
// 3.ustawienie nasluchiwania na BUTTON and CLICK

btnIncrease.addEventListener('click', textIncrease)
btnDecrease.addEventListener('click', textDecrease)