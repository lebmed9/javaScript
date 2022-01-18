// Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

// let vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

// const getLength = (arr) => {
//   return arr.map((word) => word.length);
// };
// console.log(getLength(vegetables));

// Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию
//  currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет
//  находиться сумма элементов массива numbers до этой позиции включительно.

// const numbers = [2, 3, 5, 7, 11, 13, 17];

// const getSumArray = (numbers) => {
//   let result = [];
//   numbers.reduce((sum, num) => {
//     sum = sum + num;
//     result.push(sum);
//     return sum;
//   }, 0);
//   return result;
// };

// const getSumArray = (numbers) => {
//   return numbers.reduce((sum, num, index) => {
//     if (index === 0) {
//       sum.push(num);
//     } else {
//       sum.push(sum[index - 1] + num);
//     }
//     return sum;
//   }, []);
// };

// console.log(getSumArray(numbers));

// Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть
//  равны семи: (0:7), (1:6) и т.д.

// const arr = [0, 1, 2, 3, 4, 5, 6, 7];

// const getSevenSum = (arr) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 7) {
//         result.push(`(${arr[i]}:${arr[j]})`);
//       }
//     }
//   }
//   return result;
// };

// const getSevenSum = (arr) => {
//   const result = [];
//   arr.forEach((el, index) => {
//     for (let i = index + 1; i < arr.length; i++) {
//       if (el + arr[i] === 7) {
//         result.push(`(${el}:${arr[i]})`);
//       }
//     }
//   });
//   return result;
// };

// console.log(getSevenSum(arr));

// Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять
//  из первых букв слов строки str.

// const str = "Каждый охотник желает знать, где сидит фазан.";

// const getFirstLetter = (str) => {
//   return str.split(" ").map((word) => word[0]);
// };

// console.log(getFirstLetter(str));
// Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из строк,
//  состоящих из предыдущего, текущего и следующего символа строки str.

const str = "JavaScript";

// const getThreeCharacter = (str) => {
//   return str.split("").map((_, index) => {
//     if (index === 0) return str.substr(index, 2);
//     return str.substr(index - 1, 3);
//   });
// };

// const getThreeCharacter = (str) => {
//   return str.split("").map((el, index) => {
//     if (str[index - 1] && str[index + 1]) {
//       return str[index - 1] + el + str[index + 1];
//     } else if (str[index - 1]) {
//       return str[index - 1] + el;
//     } else {
//       return el + (str[index + 1] || "");
//     }
//   });
// };

const getThreeCharacter = (str) => {
  return str.split("").map((el, index) => {
    return (str[index - 1] || "") + el + (str[index + 1] || "");
  });
};

console.log(getThreeCharacter(str)); // [Ja,Jav,ava,vaS,aSc,Scr,cri,rip,ipt,pt]

// Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных
//  по убыванию их значений.

// const numerics = [5, 7, 2, 9, 3, 1, 8];

// const getSortedArray = (arr) => {
//   return arr.sort((a, b) => b - a);
// };

// console.log(getSortedArray(numerics)); // [9,8,7,5,3,2,1]

// Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания
//  их значений.

const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];

// const getArr = (a, b, c) => {
//   //   return a.concat(b, c).sort((a, b) => b - a);
//   // return [...a, ...b, ...c].sort((a, b) => b - a);
// };

// const getArr = (...arrays) => {
//   return arrays.flat(1).sort((a, b) => b - a);
// };

// console.log(getArr(a, b, c)); // [9,8,7,6,5,4,3, 2, 1]

// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива.
// Массив, конечно же, может быть произвольным. Показать решение.

// const arrays = [[1, 2, 3], [4, 5], [6]];

// const getSumArrays = (arrays) => {
//   return arrays.flat(1).reduce((sum, el) => {
//     return sum + el;
//   }, 0);
// };

// console.log(getSumArrays(arrays));

// Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива.
//  Массив, конечно же, может быть произвольным.

// const arrays = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];

// const getSumArrays = (arrays) => {
//   return arrays.flat(Infinity).reduce((sum, el) => {
//     return sum + el;
//   }, 0);
// };

// console.log(getSumArrays(arrays));

// Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

// const arrNum = [4, 5, 2, 5, 6, 3, 346, 67, 678, 65];

// const reverse = (arr) => {
//   const result = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i]);
//   }
//   return result;
// };

// const reverse = (arr) => {
//   return arr.reduceRight((acc, el) => {
//     return [...acc, el];
//   }, []);
// };

// console.log(reverse(arrNum));

// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
// const arrNum = [1, 5, 2, 5, 6, 3, 1, 3, 678, 65];
// const getSumTen = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//     if (sum > 10) return i + 1;
//   }

//   return "сумма меньше 10";
// };

// console.log(getSumTen(arrNum));

// Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает
//  значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5)
//  сделает массив ['x', 'x', 'x', 'x', 'x'].

// const arrayFill = (value, length) => {
//   const result = new Array(length);
//   return result.fill(value, 0, length);
// };
// console.log(arrayFill(1, 6));

// Написать функцию, которая принимает слово и возвращает true, если слово является палиндромом.

// const str = "довод";

// const isPalindrom = (str) => {
//   return str.split("").reverse().join("") === str;
// };

// console.log(isPalindrom(str));

// Написать функцию которая будет принимать два массива, и в качестве
// результата будет возвращать только те значения которые есть и в первом и во втором массиве.

// const arr1 = [1, 4, 2, 5, 6];
// const arr2 = [5, 1, 3, 8, 2];

// const getSameValue = (arg1, arg2) => {
//   const result = [];
//   arg1.forEach((el) => {
//     if (arg2.includes(el)) {
//       result.push(el);
//     }
//   });
//   return result;
// };

// console.log(getSameValue(arr1, arr2));
