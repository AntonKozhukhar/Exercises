"use strict";

/* 1. Попросите пользователя ввести два числа a и b.  Если переменная a больше 0 и меньше 20, или переменная b больше или равна 8 и меньше 15, то выведите 'Верно', в противном случае выведите 'Неверно'.
Вы ввели: <Значение, которое ввел пользователь>
Результат: <Верно/Неверно>
Вы ввели и Результат  - должны быть выделены жирным */

/* let a = +prompt("a?");
let b = +prompt("b?");
let result = "Неверно";
let showMessage = document.getElementById("test");

if ((a > 0 && a < 20) || (b >= 8 && b < 15)) result = "Верно";

showMessage.innerHTML = `
<div>
  <b>Вы ввели:</b> ${a}, ${b}
</div>
<div>
  <b>Результат:</b> ${result}
</div>`; */

/* 2. Ввести значение ***. Найдите сумму цифр этого числа.
Вы ввели: 109
Вы ввели цифры: 1, 0 ,9
Сумма: 10 */

let enteredNumber = +prompt("Enter number ***");
let num = enteredNumber;
let sum = 0;
let showMessage2 = document.getElementById("test2");

while (enteredNumber) {
  sum = sum + Math.floor(enteredNumber % 10);
  enteredNumber = Math.floor(enteredNumber / 10);
}

showMessage2.innerHTML = `
<div>
  Вы ввели: ${num}
</div>
<div>
  Вы ввели цифры: ${num
    .toString()
    .split("")} не знаю, як нормально можна вивести всі числа 
</div>
<div> 
  Сумма: ${sum}
</div>`;
