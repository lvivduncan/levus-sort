{
  // кнопки перемикання
  const buttons = document.querySelectorAll('#levus-buttons span');

  // елементи
  const items = document.querySelectorAll('#levus-items figure');

  // робимо перевірку і перемикаємо 
  if (buttons.length > 0) {
    buttons[0].addEventListener('click', sortByName);
    buttons[1].addEventListener('click', sortByPrice);
    buttons[2].addEventListener('click', sortBySize);
  }

  // 1 функція для всіх
  function sort(number) {
    const values = [];

    items.forEach(item => values.push(item.dataset.item.split(',')[number]));

    // string or number
    isNaN(+values[0]) ? values.sort() : values.sort((a, b) => a - b);

    items.forEach(item => {
      values.forEach((val, num) => {
        if (val == item.dataset.item.split(',')[number]) {
          item.style.order = values.indexOf(values[num]);
        }
      });
    });
  }

  // сортуємо по імені
  function sortByName() {
    sort(0);
  }

  // сортуємо за ціною
  function sortByPrice() {
    sort(1);
  }

  // сортуємо за розміром
  function sortBySize() {
    sort(2);
  }
}