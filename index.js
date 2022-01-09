// 1. Удаление указанного количества символов из строки

//    Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// var str = "Каждый охотник желает знать";
// function delete_characters(str, length) {
//   let result = str.substr(0, length);
//   return result;
// }
// console.log(delete_characters(str, 3));

// 2. Вставить тире между словами строки

// Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами.
// При этом все символы строки необходимо перевести в верхний регистр.

// var str = "HTML JavaScript PHP";

// function insert_dash(str) {
//   return str.replaceAll(" ", "-");
// }
// console.log(insert_dash(str));

// 3. Сделать первую букву строки прописной

// Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

// var str = "string not starting with capital";

// function cursive_letter(str) {
//   return str[0].toUpperCase() + str.slice(1);
// }
// console.log(cursive_letter(str));

// 5. Смена регистра символов строки
//    Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный.
//    Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

// var str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";
// let result = "";

// function change_register(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toLowerCase()) {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i].toLowerCase();
//     }
//   }
//   return result;
// }

// console.log(change_register(str));

// 6. Удалить все не буквенно-цифровые символы
//    Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

// var str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";

// function remove_char(str) {
//   return str.replace(/[\W_-]/g, " ");
// }
// console.log(remove_char(str));

// 7. Нулевое заполнение строки
//    Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или « -« в
//    зависимости от передаваемого аргумента.

// function zeros(num, len, sign) {
//   let sumZero = "";
//   for (i = 0; i < len; i++) {
//     sumZero += 0;
//   }
//   let result = `${sign}${num}${sumZero}`;
//   return result;
// }
// console.log(zeros(3, 5, "-"));

// 9. Поиск без учета регистра
//    Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.

// function insensitive_search(str1, str2) {
//   return str1.toLowerCase().includes(str2.toLowerCase());
// }
// console.log(insensitive_search("Hello", "r"));

// 12. Повторить строку n раз
//     Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое количество раз.

// function repeatStr(str, n) {
//   let result = "";
//   for (i = 0; i < n; i++) {
//     result += str;
//   }
//   return result;
// }

// console.log(repeatStr("Hallo ", 4));

// 13. Получить имя файла
//     Напишите функцию path(pathname), которая вовращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.

// var pathname = "/home/user/dir/file.txt";

// function path(pathname) {
//   let result = pathname.lastIndexOf("/");
//   return pathname.slice(result + 1);
// }
// console.log(path(pathname));

// 14. Заканчивается ли строка символами другой строки
//     Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается
//     ли строка символами подстроки.

// var str = "Каждый охотник желает знать";
// var str1 = "скрипт";
// var str2 = "знать";

// let endsWith = (str) => {
//   if (str.slice(str.lastIndexOf(" ") + 1) === str2) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
//   return;
// };
// console.log(endsWith(str));

// 15. Подстрока до/после указанного символа
//     Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в
//     зависимости от параметра pos.

// var str = "Астрономия — Наука о небесных телах";

// function getSubstr(str, char, pos) {
//   if (pos === -1) {
//     console.log(str.slice(0, str.indexOf(char)));
//   } else if (pos === 1) {
//     console.log(str.slice(str.indexOf(char) + 1));
//   } else {
//     console.log("Enter -1 and 1");
//   }
//   return;
// }
// console.log(getSubstr(str, "б"));

// 16. Вставить подстроку в указанную позицию строки
//     Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указханную позицию pos строки str.
//     По умолчанию подстрока вставляется в начало строки.

// const str = "Астрономия — Наука о небесных телах";

// function insert(str, substr, pos) {
//   if (pos <= 0) {
//     console.log(`${substr} ${str}`);
//   } else {
//     console.log(`${str.slice(0, pos)} ${substr} ${str.slice(pos)}`);
//   }
//   return;
// }
// insert(str, "!!!", 10);

// 17. Ограничить длину строки
//     Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n.
//     Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

// const str = "Астрономия — Наука о небесных телах";

// function limitStr(str, n, symb = "...") {
//   if (str.length > n) {
//     console.log(`${str.slice(0, n)} ${symb}`);
//   } else {
//     console.log(str);
//   }
//   return;
// }
// limitStr(str);

// 19. Количество вхождений символа в строке
//     Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

// let symb = "o";
// let str = "ololo";

// function count(str, symb) {
//   let result = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === symb) {
//       result += 1;
//     }
//   }
//   return result;
// }
// console.log(count(str, symb));

// 20. Удалить лишние пробелы из строки
//     Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

// var str = "    Max is a good      boy     ";

// function strip(str) {
//   return str.replace(/\s+/g, " ").trim();
// }
// console.log(strip(str));

// var str = "    Max is    a good              boy     ";

// function strip(str) {
//   let result = str.trim();
//   for (; result.includes("  "); ) {
//     result = result.replaceAll("  ", " ");
//   }
//   return result;
// }
// console.log(strip(str));
