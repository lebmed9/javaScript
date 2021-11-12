///////////////////////////задачи 06.11.2021/////////////////////////////

// let a = 34;
// let b = 7;
// let c = 6;
// if (a > b && a > c) {                                 
//     console.log('a');                    
// } else if (b > a && b > c) {
//     console.log('b');
// } else {
//     console.log('c');
// }


// let temp = "-33";
// if (temp < -30) {
//     console.log('Оставайтесь дома!');
// }   else if(temp <= -10) { 
//     console.log('Сегодня холодно');
// }   else if (temp <= 5) {
//     console.log('Не холодно'); 
// }   else if (temp <= 15) {
//     console.log('Тепло');
// }   else if (temp <= 25) {
//     console.log('Очень тепло');
// }   else if (temp <= 35) {
//     console.log('Жарко');
// }   else {
//     console.log('Пекло!');
// }

// const role = 'user';
// switch (role) {
//     case 'user' : {
//         console.log("31 год");
//         break;
//     }
//     case 'manager' : {
//         console.log("35 лет");
//         break;
//     }
//     case 'admin' : {
//         console.log("37 лет");
//         break;
//     }
//     default : {
//         console.log("не знаю сколько лет");
//     }
// }


// const b = 6;
// if (b > 0 && b < 10 && b % 2 === 0) {
//     console.log("Сработало!!!");
// }

// const b = 17;
// if (!b) {
//     console.log("Сработало!!!")
// }
// if (b !== 0) {
//     console.log("Сработало!!!")
// }

//////////////////////////////////////////////////  while  /////////////////////////////////////////////

// let i = 0;
// while(i < 10) {
//     console.log(i);
//     i++;
// }

// let i = 0;
// let j = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// while (j < 20) {
//     console.log(j);
//     j++;
//     }   
// }

// let i = 11;
// let j = 0;
// do {
//     console.log(i);
//     i++;
// }   while (i < 10);

/////////////////////////////////  for  /////////////////////////////////////

// for (let i = 0; i < 10; i++) {
//     console.log("for", i);
// }

// for (let i = 10; i !== 0; i--) {
//     if (i === 5) break;
//     console.log("for", i)
// }

// for (let i = 0; i < 10; i++) {
//     if(i + 6 > 10) break;
//     console.log("for", i);
// }

// for (let i = 0; i < 10; i++) {
//     if(i === 5) continue;
//     console.log("for", i);
// }

/////////////////////////////////////////////////////////////////////  задачи  /////////////////////////////////////////////////////////////////////

// let s = 'Строка';
// let i = 0;
// while(i < 5) {
//     console.log(s);
//     i++;
// }

// let n = 1000;
// let m = 4;
// day = 0;
// for(; n > m; day++) {
//     n = Math.floor (n / 2);
//     console.log(n);
// }
// console.log(day);

// let n = 1800;
// let m = 2020;
// let p = 1961;
// let i = 0;
// for (;n <= p;n++) {
//     i++;
//     if (n === p) break;
// }
// console.log(n,i);