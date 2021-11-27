// const user = {
//   age: 27,
//   name: "Дмитрий",
//   "some-property": 123,
// };

// user.city = "Нижний Новгород";

// // console.log(user["some-property"]);

// "name", "age", "city";

// const request = (field, value) => {
//   // запрос на сервер
//   const filter = {
//     [field]: value,
//   };
//   return filter;
// };

// const userList = request("name", "Дмитрий");

// const userList2 = request("age", "25");

// console.log(userList, userList2);

// const firstName = "Дмитрий";
// const age = 2021 - 1994;
// const user = {
//   age,
//   name: {
//     firstName,
//   },
//   sayName() {
//     console.log(user.name.firstName);
//   },
// };
// //
// // console.log(user);
// // delete user.name.firstName;
// // console.log(user);

// // console.log(user.field);

// user.sayName();

// Создайте объект myFavoriteFilm, описывающий ваш любимый фильм. Объект
// должен содержать свойства с названием фильма, с датой выпуска, именем
// режиссера и страной выпуска.
// Добавить свойство содержащее значение выручки фильма в прокате.
// Добавить метод, который который будет выводить название фильма в консоль.
// Удалить свойство содержащее год выпуска.
// Вывести в консоль объект myFavoriteFilm и проанализировать его структуру.

// const myFavoriteFilm = {
//   title: "Lock, Stock and Two Smoking Barells",
//   releaseDate: 1998,
//   director: "Guy Ritchie",
//   country: "England",
// };

// myFavoriteFilm.boxOffice = "20000000";

// myFavoriteFilm.showTitle = function () {
//   console.log(myFavoriteFilm.title);
// };

// delete myFavoriteFilm.releaseDate;

// console.log(myFavoriteFilm);

// let num1 = 1;

// let num2 = 2;
// num1.test = 1;

// console.log(num1.test);

// console.log(new Number(num1).toString() + num2);
// console.log(num1.toString() + num2);

// console.log(str);
// console.log(str2);

// console.log(4100000000 == 4.1e9);

// const num = 1.3445;

// console.log(typeof +num.toFixed(1));

// const size = "12.9px";

// const num = parseInt(size);
// console.log(num);

// console.log(`Ivan`[0]);
// let str = "Hello";

// str = str + "world";

// let result = str.slice(0, 7);
// let result2 = str.substring(0, 7);
// // console.log(result, result2);
// console.log(index);

// Реализовать функцию которая будет определять, в каком регистре записан n
// элемент переданной строки, если в верхнем то вернуть true, в противном случае
// вернуть false.

// const isLowerCase = (str, n) => str[n] === str[n].toUpperCase();

// console.log(isLowerCase("Hello", 0));
