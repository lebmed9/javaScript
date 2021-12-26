
// let number = prompt ("Введите числло", 1);
// console.log(typeof number);

// const user = {
//     role: "admin",
// };

// function checkAcsess(user) {
//     return user.role === "admin";
// }
// function showMessage() {
//     checkAcsess(user) ? alert("R") : alert("F");
// }
// showMessage();



// function getName () {
//     return "Дмитрий";
// }
// function sayHi (text, name = getName()) {
//     console.log(`${text} ${name}`);
// }
// sayHi("Привет, ");


// function getName () {
//     return "Дмитрий";
// }
// function sayHi (text, name) {
//     console.log(`${text} ${name}`);
// }
// sayHi("Привет, ", getName());


                    // Написать функцию, которая будет принимать имя пользователя, и 
                    // выводить строку с приветствием данного пользователя, 
                    // если имени пользователя нет, выводить приветствие гостя.


// function sayHello (userName = 'Гость') {
//     alert(`Привет, ${userName}`);
// }

// sayHello("Дмитрий");

// function sayHello(userName = "Гость") {
//     alert(`Привет, ${userName}`);
// }
// let userName = prompt('Введите ваше имя') || "Гость";

// sayHello(userName);




// Написать функцию, которая в качестве первого параметра
// будет принимать численное значение, а в качестве второго
// параметра будет принимать степень, в которую надо возвести
// первый аргумент. По умолчанию, второй аргумент единица.

// function pow(num, n = 1) {
//     return num ** n;
// }
// console.log(pow(5, 2));

                                    // function pow(num, n = 1) {
                                    //     let result;
                                    //     for(let i = 1;i <= n; i++) {
                                    //         result = num*num;
                                    //         console.log(result);
                                    //     }
                                    // }
                                    // pow(5, 3);




// Создайте функцию repeat(str, n), которая возвращает строку,
// состоящую из n повторений строки str. n — по умолчанию 2,
// str — по умолчанию пустая строка

// function repeat(str = '', n = 2) {
//     return str.repeat (n);
// }
// console.log(repeat("Строка", 3));


// 1. Создайте объект myFavoriteFilm, описывающий ваш любимый фильм. Объект должен содержать
//    свойства с названием фильма, с датой выпуска, именем режиссера и страной выпуска.

// let myFavoriteFilm = {
//  name: "Кровавый спорт",
//  date: "1980",
//  reg: "Стивен",
//  country: "USA",
// }
// console.log(myFavoriteFilm);

// 2. Добавить свойство содержащее значение выручки фильма в прокате.

// let myFavoriteFilm = {
//      title: "Кровавый спорт",
//      date: "1980",
//      reg: "Стивен",
//      country: "USA",
//     }
//     myFavoriteFilm.profit = '10.000';

//     myFavoriteFilm.showTitle = function () {
//         console.log(myFavoriteFilm.title);
//     };

//     delete myFavoriteFilm.date;
    // console.log(myFavoriteFilm);

// const ch = (n) => {
// if (n == n.toUpperCase()) {
//     console.log(true);
// } else {
//     console.log(false);
// }
// }
// console.log(ch('N'));


// const isLowerCase = (str, n) => str[n] === str[n].toUpperCase();
// console.log(isLowerCase("Hello", 3));






// const comparison = (str1, str2) => {
//     if (str1.toUpperCase == str2.toUpperCase) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }
// console.log(comparison('n', 'A'));


// Написать функцию, которая будет принимать массив чисел, содержащий
//  целые положительные и целые отрицательные числа,
// в качестве результата возвращать сумму четных положительных элементов
//  переданного массива.

// let num = [1, 2, -5, -8, 4, 10, 4];
// let sum = num.filter((el) => el % 2 === 0);
// let result = sum.reduce((a, b) => a + b);
// console.log(result);


// Написать функцию, которая будет принимать массив чисел, и будет убирать
// повторяющиеся значения из переданного массива, в качестве результата возвращать
// новый массив с уникальными значениями из исходного.


//  let num = [1, 2, 8, 4, 8, 7, 4];
//     let findDuble = num.filter((a, b) => num.indexOf(a) === b);
//     console.log(findDuble);



