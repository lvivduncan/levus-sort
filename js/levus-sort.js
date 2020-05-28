// jquery ^_^
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// кнопки перемикання
const buttons = $('#levus-buttons span');

// основний блок з елементами
const wrapper = $('#levus-items');

// елементи
const items = $('#levus-items figure');

// перемикаємо
buttons[0].addEventListenter('click', sortByName);
buttons[1].addEventListenter('click', sortByPrice);
buttons[2].addEventListenter('click', sortBySize);

// функції
function sortByName(){

}

function sortByPrice(){

}

function sortBySize(){

}