//Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let userForm=document.forms[0];
let usersData=localStorage.getItem('users')
let usersArr=JSON.parse(usersData)||[];
userForm.onsubmit = function(ev){
    ev.preventDefault()
    let name= this.name.value;
    let sruname= this.sruname.value;
    let age= this.age.value;
    usersArr.push({name,sruname,age});
    localStorage.setItem('users',JSON.stringify(usersArr))
}
let buttonShow = document.getElementById('show-btn');
buttonShow.onclick = function (){
    for (const user of usersArr) {
        let block = document.getElementById('show-div');
        let paragraph = document.createElement('p');
        paragraph.innerText=`Name: ${user.name}, Surname: ${user.sruname}, Age: ${user.age}`
        block.append(paragraph);
    }
}

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let cntBlock=document.getElementById('rld-count');
window.onload =function (){
    let count=parseInt(localStorage.getItem('counter'))||1;
    cntBlock.innerText=`${count}`;
    localStorage.setItem('counter',`${count+1}`);
}
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// done:)
//
//
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let displayBlock=document.getElementById('10-elements');
let arr100=[];
for (let i = 0; i < 100; i++) {
    arr100[i]=Math.floor(Math.random()*100);
}
let previousBtn=document.getElementById('prev-btn');
let nextBtn=document.getElementById('next-btn');
let buttonValue=parseInt(localStorage.getItem('btnValue'))||0;
for (let i = buttonValue*10; i <(buttonValue+1)*10 ; i++) {
    const element = arr100[i];
    let elementText = document.createElement('p');
    elementText.innerText = `${i + 1}. ${element}`;
    displayBlock.append(elementText);
}
if (buttonValue>8){
    nextBtn.hidden=true;
}
if (buttonValue<1){
    previousBtn.hidden=true;
}
previousBtn.onclick=function (){
    buttonValue-=1;
    localStorage.setItem('btnValue',`${buttonValue}`);
    window.location.reload()
}
nextBtn.onclick=function (){
    buttonValue+=1;
    localStorage.setItem('btnValue',`${buttonValue}`);
    window.location.reload()
}
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let hiddenBlock=document.getElementById('text');
let hideBtn=document.getElementById('bye-btn');
let cancelBtn=document.getElementById('hi-btn');

hideBtn.onclick=function (){
    hiddenBlock.hidden=true;
}
cancelBtn.onclick=function (){
    hiddenBlock.hidden=false;
}
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let ageForm=document.forms[1];
console.log(ageForm);
ageForm.onsubmit = function(ev){
    ev.preventDefault()
    let age= this.age.value;
    if (age<18){
        let warning=document.createElement('p');
        warning.innerText='!WARNING! Age is under 18';
        document.body.appendChild(warning);
    }
    else {
        let warning=document.createElement('p');
        warning.innerText='OK';
        document.body.appendChild(warning);
    }
}
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається