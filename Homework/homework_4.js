// 1.Сделайте функцию, которая возвращает квадрат числа.
//   Число передается параметром.

// let numSquare = (num) => num ** 2;
// console.log(numSquare(5));

// 2. Сделайте функцию, которая возвращает сумму двух чисел.

// let sum = (num1, num2) => num1 + num2;
// console.log(sum(2, 4));

// 3.Сделайте функцию, которая отнимает от первого числа второе
//   и делит на третье.

// let result = (num1, num2, num3) => (num1 - num2) / num3;
// console.log(result(6, 2, 2));

// 4.Сделайте функцию, которая принимает параметром число
//   от 1 до 7, а возвращает день недели на русском языке

// let week = (day) => {
//   if (day === 1) {
//     console.log("понедельник");
//   } else if (day === 2) {
//     console.log("Вторник");
//   } else if (day === 3) {
//     console.log("Среда");
//   } else if (day === 4) {
//     console.log("Четверг");
//   } else if (day === 5) {
//     console.log("Пятница");
//   } else if (day === 6) {
//     console.log("Суббота");
//   } else if (day === 7) {
//     console.log("Воскресение");
//   } else {
//     console.log("Введите число от 1 до 7");
//   }
//   return;
// };
// week(1);

// 5. Сделайте функцию, которая параметрами принимает 2 числа.
//    Если эти числа равны - пусть функция вернет true,
//    а если не равны - false.

// let result = (num1, num2) => num1 === num2;
// console.log(result(2, 2));

// 6. Сделайте функцию, которая параметрами принимает 2 числа.
//    Если их сумма больше 10 - пусть вернет true,
//    а если нет то - false.

// let result = (num1, num2) => num1 + num2 > 10;
// console.log(result(7, 4));

// 7.  Сделайте функцию, которая параметром принимает число
//     и проверяет - отрицательное оно или нет.
//     Если отрицательное - пусть функция вернет true,
//     а если нет - false.

// let result = (num) => num < 0;
// console.log(result(-3));

// 8.Сделайте функцию isNumberInRange, которая параметром
//   принимает число и проверяет, что оно больше нуля и меньше 10.
//   Если это так - пусть функция возвращает true,
//   если не так - false.

// let isNumberInRange = (num) => num > 0 && num < 10;
// console.log(isNumberInRange(3));

// 9. Создайте функцию rgb(), которая будет принимать три числовых
//    аргумента и возвращать строку вида «rgb(23,100,134)». Если
//    аргументы не заданы, считать их равными нулю. Не проверять
//    переменные на тип данных

// let rgb = (num1 = 0, num2 = 0, num3 = 0) => {
//   console.log(`rgb(${num1}, ${num2}, ${num3})`);
// };
// rgb(1, 3, 5);

// 10. Написать функцию, которая принимает в себя три параметра - число и две функции. Первая переданная функция
//     возвращает возведенное в квадрат переданное число и будет вызываться, если число четное. Вторая переданная
//     коллбэк-функция будет вызываться с переданным в нее числом , если число нечетное, и будет возвращать число,
//     увеличенное на 1.

// let numSquare = (num) => num ** 2;

// let number = (num) => num + 1;

// function result(num, f1, f2) {
//   if (num % 2 === 0) {
//     return f1(num);
//   } else {
//     return f2(num);
//   }
//   return;
// }
// console.log(result(7, numSquare, number));

// 11. Написать функцию mult(num1, num2 , num3) принимающую 3 числа. Функцию перемножает num1 и num2 столько раз,
//     сколько указано в третьем аргументе num3. Значения num1 и num2 по умолчанию 1,  num3 по умолчанию 2.

// let mult = (num1 = 1, num2 = 1, num3 = 2) => {
//     let result = 0;
//     let sum = 0;
//   for (i = 0; i < num3; i++) {
//     result = (num1 * num2);
//     sum += result;
//   }
//   console.log(sum);
//   return;
// };
// mult();

// 12. Написать функцию, которая принимает 3 аргумента(каждый аргумент - 1 слово)
//     и возвращает строку с этими 3 словами, расположенными в алфавитном порядке.