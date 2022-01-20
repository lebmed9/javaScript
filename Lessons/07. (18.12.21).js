// const user1 = {
//   name: "Дмитрий",
//   sayName(phrase) {
//     console.log(this.name + " " + phrase);
//   },
// };

// const user2 = {
//   name: "Андрей",
// };

// Object.freeze(user2);

// user1.sayName.apply(user2, ["фраза"]);

// const boundSayName = user1.sayName.bind(user2, "фраза");

// boundSayName();

// const object = {
//   message: "Hello, World!",
//   logMessage() {
//     console.log(this.message);
//   },
// };
// setTimeout(object.logMessage, 1000);

// const customSetTimeout = (callback, delay) => {
//   callback();
// };

// const sum = (a, b) => {
//   return a + b;
// };

// const addSeven = sum.bind(null, 7);

// console.log(addSeven(78, 6, 4));

// Создать объект который будет описывать любой населенный пункт (на ваш выбор).
// Объект должен содержать свойства описывающие: название и численность. Так же
// объект должен содержать два метода: первый должен возвращать название города, а
// второй должен возвращать численность.
// Важно! Для решения необходимо использовать ключевое слово this.
// *Дополнительно, добавить метод, который будет устанавливать новое значение для
// выбранного свойства из объекта описывающего город.
// Создайте второй объект описывающий город (первый возьмите из решения задачи №1). Второй объект должен содержать
// только свойства названия и численность.
// Используя метод call() / apply() вызовите методы объекта первого города в контексте объекта второго города.
// Используя метод bind(), изменить свойства объекта второго города на произвольные значения.

// const city = {
//   name: "Нижний Новгород",
//   population: 1500000,
//   getName() {
//     return this.name;
//   },
//   getPopulation() {
//     return this.population;
//   },
//   setField(fieldName, value) {
//     this[fieldName] = value;
//   },
// };

// const city2 = {
//   name: "Москва",
//   population: 10000000,
// };

// console.log(city.getName.call(city2));

// const city2SetField = city.setField.bind(city2);

// city2SetField("country", "Россия");

// console.log(city2);
// const clock = "Часы на улице";
// function hall() {
//   //   const clock = "Часы в холле";

//   function cabinet() {
//     // const clock = "Часы в кабинете";

//     console.log(clock);
//   }
//   cabinet();
// }

// hall();

// function example() {
//   // {envoirmentRecord: closure, outer: global}
//   let closure = 100;
//   return function (b) {
//     // {envoirmentRecord: {b}, outer: example}
//     return closure + b;
//   };
// }

// const clouserExample = example();

// console.log(clouserExample);
// console.log(clouserExample(100));

// const sum = (a, b) => {
//   return a + b;
// };

// const addSeven = sum.bind(null, 7);

// const sum = (a, b, c) => {
//   return a + b + c;
// };

// function currySum(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// currySum(a)(b);

// const addSeven = currySum(7);

// console.log(addSeven(5));

// const user = {
//   name: "Дмитрий",
//   statusDiscount: 0.1,
// };

// const renderGoods = (discount) => {
//   return (price) => {
//     debugger;
//     (1 - discount) * price;
//   };
// };

// const personalDiscuont = renderGoods(user.statusDiscount);

// personalDiscuont(190);
// personalDiscuont(10);
// personalDiscuont(14650);

// const arr = [1, 2, 3, 4, 5, 6];

// const multyplyArr = (multy) => {
//   return (el) => {
//     return el * multy;
//   };
// };

// const doubleArr = arr.map(multyplyArr(2));

// const tripleArray = arr.map(multyplyArr(3));

// console.log(doubleArr, tripleArray);

// Используя каррирование написать функцию которая будет вычислять объём
// параллелепипеда.

// function getValue(a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c;
//     };
//   };
// }

// const getValue = (a) => {
//   return (b) => {
//     return (c) => {
//       return a * b * c;
//     };
//   };
// };

// const getValue = (a) => (b) => (c) => {
//   return a * b * c;
// };

// console.log(getValue(2)(2)(2));

// Используя замыкание написать функцию которая будет вычислять объём
// параллелепипеда с высотой 10.

// const getValue = (a) => (b, c) => {
//   return a * b * c;
// };

// const getValue10Height = getValue(10);

// console.log(getValue10Height(2, 2));

// C помощью замыкания реализовать функцию счетчика. (При каждом вызове
// функции в консоль должно выводиться текущие значение счетчика).

// const getCounter = () => {
//   // {envoirmentRecord: count, outer: global}
//   let count = 0;
//   return () => {
//     // {envoirmentRecord: , outer: getCounter}
//     count++;
//     return count;
//   };
// };

// const counter1 = getCounter();

// const counter2 = getCounter();
// console.log("counter1", counter1());
// console.log("counter2", counter2());
// console.log("counter1", counter1());
// console.log("counter1", counter1());
// console.log("counter2", counter2());

// console.log(counter1());
// console.log(counter1());

const user = {
  name: "Дмитрий",
  lastName: "Менлияхматов",
  middleName: "Георгиевич",
  get fullname() {
    return `${this.lastName} ${this.name} ${this.middleName}`;
  },
  set fullname(value) {
    // const valueStr = value.split(" ");
    // this.lastName = valueStr[0];
    // this.name = valueStr[1];
    // this.middleName = valueStr[2];
    const [lastName, name, middleName] = value.split(" ");
    this.lastName = lastName;
    this.name = name;
    this.middleName = middleName;
  },
  accessToAdmin: false,
  accessToLK: false,
  _role: "unknown",
  get role() {
    return this._role;
  },
  set role(value) {
    this._role = value;
    if (value === "admin") {
      this.accessToAdmin = true;
      this.accessToLK = false;
    }
    if (value === "user") {
      this.accessToAdmin = false;
      this.accessToLK = true;
    }
  },
};

console.log(user.fullname);

user.fullname = "Иванов Иван Иванович";

console.log(user);

user.role = "admin";

console.log(user);
