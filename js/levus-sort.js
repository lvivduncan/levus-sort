// jquery ^_^
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// кнопки перемикання
const buttons = $$('#levus-buttons span');

// основний блок з елементами
const wrapper = $('#levus-items');

// елементи
const items = $$('#levus-items figure');

// перемикаємо
buttons[0].addEventListener('click', sortByName);
buttons[1].addEventListener('click', sortByPrice);
buttons[2].addEventListener('click', sortBySize);

// сортуємо по імені
function sortByName() {
  const values = [];
  items.forEach(item => {
    values.push(item.dataset.item.split(',')[0]);
  });

  values.sort();

  items.forEach((item, i) => {
    values.forEach((val, num) => {
      if (val == item.dataset.item.split(',')[0]) {
        item.style.order = values.indexOf(values[num])
      }
    });
  });
}

// сортуємо за ціною
function sortByPrice() {
  const values = [];
  items.forEach(item => {
    values.push(item.dataset.item.split(',')[1]);
  });

  values.sort((a, b) => a - b);

  items.forEach((item, i) => {
    values.forEach((val, num) => {
      if (val == item.dataset.item.split(',')[1]) {
        item.style.order = values.indexOf(values[num])
      }
    });
  });
}

// сортуємо за розміром
function sortBySize() {
  const values = [];
  items.forEach(item => {
    values.push(item.dataset.item.split(',')[2]);
  });

  values.sort((a, b) => a - b);

  items.forEach((item, i) => {
    values.forEach((val, num) => {
      if (val == item.dataset.item.split(',')[2]) {
        item.style.order = values.indexOf(values[num])
      }
    });
  });
}