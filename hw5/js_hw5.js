//ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let a=20;
let b=40;
let square=(side1,side2)=>side1*side2;
console.log(square(a,b));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let squareCircle=(radius)=>radius*radius*Math.PI;
console.log(squareCircle(a));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let h=10;
let volumeCylinder=(radius,height)=>radius*radius*Math.PI*height;
console.log(volumeCylinder(a,h));

// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = [-3,1,2,33,4,15,6,7,8,29,10];
let displayArray= (array)=>{
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
displayArray(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let lorem='lorem ipso'
let divGenerator=(text)=>document.write(`<div>Your text is here: ${text}</div>`);

divGenerator(lorem);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let listGenerator=(text)=>{
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
listGenerator(lorem);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let bigListGenerator=(text, count)=>{
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
bigListGenerator(lorem,a);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrMix=[1,23,'hello okten', true];
let listArrayGenerator=(array)=>{
    document.write(`<ul>`);
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
}
listArrayGenerator(arrMix);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrObjects=[
    {id: 1, name: 'Bohdan', age:87},
    {id: 2, name: 'Ivan', age:17},
    {id: 3, name: 'Serhiy', age:28},
    {id: 4, name: 'Sviatoslav', age:43},
    {id: 5, name: 'Volodymyr', age:41}
]
let displayArrayHTML=(array)=>{
    for (const arrayElement of array) {
        document.write(`<div>id: ${arrayElement.id}, name: ${arrayElement.name}, age: ${arrayElement.age}</div>`);
    }
}
displayArrayHTML(arrObjects);

// - створити функцію яка повертає найменьше число з масиву
let arrMin=(array)=>{
    let min=array[0];
    for (let i = 0; i < array.length; i++) {
        if(array[i]<min){
            min=array[i];
        }
    }
    return min;
}
console.log(arrMin(arr));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let arrSum=(array)=>{
    let sum=0;
    for (const arrayElement of array) {
        sum +=arrayElement;
    }
    return sum;
}
console.log(arrSum(arr));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap=(arr,index1,index2)=>{
    let first=arr[index2];
    let second=arr[index1];
    arr[index1]=first;
    arr[index2]=second;
    return arr;
}

console.log(swap(arr,9,10));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange=(sumUAH,currencyValues,exchangeCurrency)=>{
    for (const val of currencyValues) {
        if (exchangeCurrency==val.currency){
            let cash=sumUAH/val.value;
            console.log(cash);
        }
    }
}
exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR')