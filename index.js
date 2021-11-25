
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




