// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr10=[10,20,'hi okten',1,64.3,'101',2,'bye',true,false];
console.log(arr10);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let bookOne={
    title:'Bible',
    pageCount:268,
    genre:'religion'
};
let bookTwo={
    title:'Kobzar',
    pageCount:179,
    genre:'UA literature'
};
let bookThree={
    title:'Constitution',
    pageCount:333,
    genre:'government'
};


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let bookFour={
    title:'Martian',
    pageCount:400,
    genre:'sci-fi',
    authors:[{name:'Andy Weir',age:47}]
};
let bookFive={
    title:'Math 9th grade',
    pageCount:277,
    genre:'school',
    authors:[{name:'Ister',age:57},{name:'Merzliak',age:46}]
};
let bookSix={
    title:'Voroshylovhrad',
    pageCount:354,
    genre:'history',
    authors:[{name:'Zhadan',age:'49'}]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user1={name:'Bob', username:'dafasdf', password:'pass-1'};
let user2={name:'Jane', username:'dvzzcd', password:'password'};
let user3={name:'Ralph', username:'ghnh', password:'12345'};
let user4={name:'Mops', username:'xvb', password:'111111'};
let user5={name:'Bill', username:'khkjhk', password:'parol'};
let user6={name:'Dana', username:'tyutu', password:'33333333333'};
let user7={name:'Pip', username:'w654', password:'nopass'};
let user8={name:'Javier', username:'444rdde', password:'secret_pass'};
let user9={name:'Elizabeth', username:'46564653123', password:'okten'};
let user10={name:'Joanna', username:'eeert77', password:'000000'};
console.log(user1.password,user2.password,user3.password,user4.password,user5.password,user6.password,user7.password,user8.password,user9.password,user10.password,);


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x=0;
if (x!==0){
    console.log('Вірно');
}
else{
    console.log('Невірно');
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time=40;
if(time >=0 && time < 15){
    console.log('1-а чверть');
}
else if(time>=15 && time<30){
    console.log('2-а чверть');
}
else if(time>=30 && time<45){
    console.log('3-а чверть');
}
else if(time>=45 && time<60){
    console.log('4-а чверть');
}
else {
    console.log('Невірно задане число')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day=31;
if(day>0 && day<11){
    console.log('1-а декада');
}
else if(day>=11 && day<20){
    console.log('2-а декада');
}
else if(day>=20 && day<=31){
    console.log('3-а декада');
}
 else {
     console.log('Невірно задане число')
}
