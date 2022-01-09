
// const user = {
//   role: "admin",
// };

// function checkAcsess(user, user2) {
//   return user.role === "admin";
// }

// function showMessage() {
//   if (checkAcsess(user)) {
//     alert("Доступ разрешен");
//   } else {
//     alert("Доступ запрещен");
//   }
// }

// showMessage();

// function getSum(a, b = 0) {
//   console.log(a, b);
// }

// getSum(2, 5);

// function getName() {
//   return "Дмитрий";
// }

// let someText = "Какой-то текст";

// function sayHi(text, name) {
//   let innerText = someText;
//   someText = "sdasdsd";
//   console.log(`${text} ${name}`);
// }

// const result = sayHi("Привет, ", getName());

// // const name = getName();
// console.log(result);

// Написать функцию, которая будет принимать имя пользователя, и выводить
// строку с приветствием данного пользователя, если имени пользователя нет,
// выводить приветствие гостя.

// function sayHello(userName) {
//   alert(`Привет,  ${userName}`);
// }

// let userName = prompt("Введите ваше имя") || "Гость";

// sayHello(userName);

// Написать функцию, которая в качестве первого параметра будет принимать
// численное значение, а в качестве второго параметра будет принимать степень, в
// которую надо возвести первый аргумент. По умолчанию, второй аргумент
// единица.

// function pow(num, n = 1) {
//   return num ** n;
// }

// console.log(pow(5, 3));

// Создайте функцию repeat(str, n), которая возвращает строку, состоящую из n
// повторений строки str. n — по умолчанию 2, str — по умолчанию пустая строка

// function repeat(str, n = 2) {
//   let result = "";
//   for (let i = 0; i < n; i++) {
//     result += str;
//   }
//   return result;
// }

// console.log(repeat("Строка", 3));

// let showText = function (text) {
//   console.log(text);
// };
// let func;
// if (3) {
//   func = function () {
//     console.log("if");
//   };
// } else {
//   func = function () {
//     console.log("else");
//   };
// }

// function showMessage(message, onOkHandler, onCancelHandler) {
//   let answer = confirm(message);
//   if (answer) {
//     onOkHandler();
//   } else {
//     onCancelHandler();
//   }
// }
// function onOk() {
//   alert("Выберайте товары");
// }

// function onCancel() {
//   alert("Выберете свой город");
// }
// showMessage("Вы из Нижнего Новгорода?", onOk, onCancel);

// showMessage(
//   "Вам испольнилось 18 лет?",
//   () => alert("Можете пользоваться сайтом"),
//   () => alert("Подрастешь - вернись")
// );

// function someFunc() {
//   console.log("Функция отработала");
// }

// let someFunc = function () {
//   console.log("Функция отработала");
// };

// function sum(a, b) {
//   return a + b;
// }

// let sum1 = (a, b) => a + b;

// Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа
// равны - пусть функция вернет true, а если не равны - false.
// const isEqual = (a, b) => a === b;
// const isEqual = (a, b) => {
//   return a === b;
// };

// Сделайте функцию, которая принимает параметром число от 1 до 7, а
// возвращает день недели на русском языке.

// function getStringDay(number) {
//   if (number === 1) {
//     return "Понедельник";
//   } else if (number === 2) {
//     return "Вторник";
//   } else if (number === 3) {
//     return "Среда";
//   } else if (number === 4) {
//     return " Четверг";
//   } else if (number === 5) {
//     return "Пятница";
//   } else if (number === 6) {
//     return "Суббота";
//   } else if (number === 7) {
//     return "Воскресенье";
//   }
// }

// // console.log(getStringDay(5));

// function getStringDay(number) {
//   switch (number) {
//     case 1: {
//       return "Понедельник";
//     }
//     case 2: {
//       return "Вторник";
//     }
//     case 3: {
//       return "Среда";
//     }
//     case 4: {
//       return "Четверг";
//     }
//     case 5: {
//       return "Пятница";
//     }
//     case 6: {
//       return "Суббота";
//     }
//     case 7: {
//       return "Воскресенье";
//     }
//   }
// }
// console.log(getStringDay(5));

// function getStringDay(number) {
//   let dayArray = [
//     "Понедельник",
//     "Вторник",
//     "Среда",
//     "Четверг",
//     "Пятница",
//     "Суббота",
//     "Воскресенье",
//   ];
//   return dayArray[number - 1];
// }

// console.log(getStringDay(5));

// Написать функцию которая будет возвращать n-ный член последовательности
// Фибонначи. (Дополнительно решить с помощью рекурсии)
// 0, 1, 1, 2, 3, 5, 8, 13, 21........
// function getFibonacciNumber(n) {
//   let el1 = 0; // n-2
//   let el2 = 1; // n-1

//   for (let i = 2; i < n; i++) {
//     let sumPrev = el1 + el2;
//     el1 = el2;
//     el2 = sumPrev;
//   }
//   return el2;
// }

// console.log(getFibonacciNumber(7));
