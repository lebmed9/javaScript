// 1. Удаление указанного количества символов из строки

// Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// var str = 'Каждый охотник желает знать';
// function delete_characters(str, length) {
//     return str.slice (0, length);
// }   

// console.log(delete_characters(str, 7));

// 2. Вставить тире между словами строки

// Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами.
// При этом все символы строки необходимо перевести в верхний регистр.

// var str = "HTML JavaScript PHP";

// function insert_dash(str) {
//  return str.replaceAll(" ", "-");
// }
// console.log(insert_dash(str));


// 3. Сделать первую букву строки прописной

// Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

// var str = "string not starting with capital"; 

// function cursive_letter(str) {
//     return str[0].toUpperCase() + str.slice (1);
// }

// console.log(cursive_letter(str));

// 4. Первая буква каждого слова заглавная
// Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

// var str = "каждый охотник желает знать";  
// function capitalize(str) {
//     return str[7].toUpperCase() + str.slice (1);
// }
// console.log(capitalize(str));



// 5. Смена регистра символов строки
// Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр
// каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

// var str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";  
// function change_register(str) {
//     var result = "";
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === str[i].toLowerCase()) {
//             result += str[i].toUpperCase(); 
//         }else result += str[i].toLowerCase();
//     }
// return result;
// }
// console.log(change_register(str));


// 6. Удалить все не буквенно-цифровые символы
// Напишите функцию remove_char(str), которая возвращает строку,
// очищенную от всех не буквенно-цифровых символов.

// var str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";  
// function remove_char(str) {
//     let result ="";
//     for(let i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() !== str[i].toUpperCase()) {
//             result += str[i];
//         } else if(!isNaN(+str[i])) {
//             result += str[i];
//         }
//     }
//     return result;
// }
// console.log(remove_char(str));

// 7. Нулевое заполнение строки
// Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение
// с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.

// function zeros(num, len, sign) {
//   numZeros = num + ''; 
//   while (numZeros.length < len) {
//     numZeros += '0';
//   }
//   return sign === undefined || sign === '' ? numZeros : sign + numZeros;
// }

// console.log(zeros(15, 6));

// 8. Сравнение строк без учёта регистра
// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

// let str1 = 'Приветм';
// let str2 = 'привет';
// function comparison(str1, str2) {
//     let res = str1.toUpperCase() === str2.toUpperCase();
//     return res;
// }

// console.log(comparison(str1, str2));

// 9. Поиск без учета регистра
// Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки str2
// в строке str1 без учёта регистра символов.

// let str1 = 'Привет';
// let str2 = 'Т';
// function insensitive_search(str1, str2) {
//     let res1 = str1.toUpperCase();
//     let res2 = str2.toUpperCase();
//     return (res1).indexOf(res2);
// }
// console.log(insensitive_search(str1, str2));


// 10. ВерблюжийРегистр (CamelCase)
// Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase,
// при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.



