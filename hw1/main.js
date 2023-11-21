//Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//Вивести кожну змінну за допомогою: console.log

let str1 = 'hello';
let str2= 'owu';
let str3='com';
let str4='com';
let str5='ua';

let num1=1;
let num2=10;
let num3=-999;

let floatNum1=3.14;
let floatNum2=2.7;

let num4=16;

let bool1=true;
let bool0=false;

console.log(str1, str2, str3, str4, str5, num1, num2, num3, floatNum1, floatNum2, num4, bool1, bool0);


//Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
//(Не об'єкт, просто за допомоги конкатенації)

let firstName='Kos ';
let middleName =  'Ihor ';
let lastName='Ivanovych';
person=(firstName+middleName+lastName);


//За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль: let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);


//Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

firstName=prompt("Введіть ваше прізвище:");
middleName =prompt("Введіть ваше ім'я:");
lastName=prompt("Введіть ваше по-батькові:");
console.log(`Прізвище: ${firstName}, ім'я: ${middleName}, по-батькові: ${lastName}`);