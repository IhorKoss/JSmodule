// }
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let choose=+prompt("1. Понеділок\n2.Вівторок\n3.Середа\n4.Четвер\n5.П'ятниця\n6.Субота\n7.Неділя")
switch (choose){
    case(1):
        console.log('Англійською: Monday');
        break;
    case(2):
        console.log('Англійською: Tuesday');
        break;
    case(3):
        console.log('Англійською: Wednesday');
        break;
    case(4):
        console.log('Англійською: Thursday');
        break;
    case(5):
        console.log('Англійською: Friday');
        break;
    case(6):
        console.log('Англійською: Saturday');
        break;
    case(7):
        console.log('Англійською: Sunday');
        break;
    default:
        console.log('Невірно обране значення')
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let num1 =+prompt("Введіть перше число")
let num2 =+prompt("Введіть друге число")
if(num1>num2){
    console.log(`${num1} - більше число`);
}
else if(num1<num2){
    console.log(`${num2} - більше число`);
}
else if(num1===num2){
    console.log('Числа однакові');
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x=false;
if (x===false || x==='' || x===0 || x===NaN || x===undefined || x===null){
    x="default";
    console.log(x);
}
else{
    console.log(x)
}
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration>5){
    console.log(`Курс ${coursesAndDurationArray[0].title} - Супер`)
}
if (coursesAndDurationArray[1].monthDuration>5){
    console.log(`Курс ${coursesAndDurationArray[1].title} - Супер`)
}
if (coursesAndDurationArray[2].monthDuration>5){
    console.log(`Курс ${coursesAndDurationArray[2].title} - Супер`)
}
if (coursesAndDurationArray[3].monthDuration>5){
    console.log(`Курс ${coursesAndDurationArray[3].title} - Супер`)
}
if (coursesAndDurationArray[4].monthDuration>5){
    console.log(`Курс ${coursesAndDurationArray[4].title} - Супер`)
}
if (coursesAndDurationArray[5].monthDuration>5){
    console.log(`Курс ${coursesAndDurationArray[5].title} - Супер`)
}
