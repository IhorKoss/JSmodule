//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname , email, phone){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
}
let users=[];
for (let i = 0; i < 10; i++) {
    users.push(new User(i+1,'bob','bib','bobib@gmail.com','+12984789'));
}

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let userFilter=users.filter((user)=>user.id%2===0);
console.log(userFilter)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
users=users.sort((first,second)=>{return first.id-second.id;});

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client{
    constructor(id, name, surname , email, phone, order) {
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
        this.order=order;
    }
}

let clientBase=[];
let client1= new Client(1,'Vasya','qrew','1eeeeeeeeee11@gmail.com','+38002500000',['book','newspaper','book','book','book']);
let client2= new Client(2,'dsfsaf','rqw','11e1@gmail.com','+38005000000',['book','newspaper','book']);
let client3= new Client(3,'adf','qqq','1re11@gmail.com','+3800000800',['book','newspaper']);
let client4= new Client(4,'fasdf','Petrenko','11qw1@gmail.com','+38000660000',['book','newspaper']);
let client5= new Client(5,'dsh','Petrerrwernko','11we1@gmail.com','+380000060000',['book','newspaper','book','book']);
let client6= new Client(6,'Vasfdghdfya','Petreeeenko','1we1@gmail.com','+380800000',['book','newspaper']);
let client7= new Client(7,'fdhgd','qer','1ds11@gmail.com','+380999000000',['book','newspaper','book','book','book','book']);
let client8= new Client(8,'hdfg','qre','1as11@gmail.com','+380800000',['book']);
let client9= new Client(9,'weffft','Petrerenko','11ds1@gmail.com','+3800000770000',['book','newspaper','book']);
let client10= new Client(10,'zvcxv','wre','11dsd1@gmail.com','+38000070000',['newspaper']);
clientBase.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

clientBase=clientBase.sort((first,second)=>{return first.order.length-second.order.length;});

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function CarInfo(model,company,year,topspeed,engineVolume){
    this.model=model;
    this.company=company;
    this.year=year;
    this.topspeed=topspeed;
    this.engineVolume=engineVolume;
    this.drive=function(){console.log(`їдемо зі швидкістю ${this.topspeed} на годину`)};
    this.info=function (){console.log(`model:${this.model}, company:${this.company}, year:${this.year}, topspeed:${this.topspeed}, engineVolume:${this.engineVolume}`)}
    this.increaseMaxSpeed= function (newSpeed){this.topspeed=newSpeed};
    this.changeYear= function (newValue){this.year=newValue};
    this.addDriver=function (driver){this.driver=driver};
}
let car = new CarInfo('Q8','Audi',2020,280,3.0)
car.drive();
car.info();
car.increaseMaxSpeed(900);
car.changeYear(2023);
car.addDriver({name:'bogdan'});

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarData {
    constructor(model,company,year,topspeed,engineVolume) {
        this.model=model;
        this.company=company;
        this.year=year;
        this.topspeed=topspeed;
        this.engineVolume=engineVolume;
    }
    drive=function(){console.log(`їдемо зі швидкістю ${this.topspeed} на годину`)};
    info=function (){console.log(`model:${this.model}, company:${this.company}, year:${this.year}, topspeed:${this.topspeed}, engineVolume:${this.engineVolume}`)}
    increaseMaxSpeed= function (newSpeed){this.topspeed=newSpeed};
    changeYear= function (newValue){this.year=newValue};
    addDriver=function (driver){this.driver=driver};
}
let carClass= new CarData('X5','BMW',2015,250,4.0)
carClass.drive();
carClass.info();
carClass.increaseMaxSpeed(350);
carClass.changeYear(2016);
carClass.addDriver({name:'olga'});

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella(name,age,footSize){
    this.name=name;
    this.age=age;
    this.footSize=footSize;
}
let prince=new Cinderella('Charles', 25, 35);
let cinderellaArr=[
    new Cinderella('Elizabeth',27, 40),
    new Cinderella('Alice', 25, 38),
    new Cinderella('Sophia', 30, 37),
    new Cinderella('Emma', 22, 36),
    new Cinderella('Olivia', 28, 39),
    new Cinderella('Ava', 26, 41),
    new Cinderella('Mia', 29, 35),
    new Cinderella('Isabella', 24, 38),
    new Cinderella('Ella', 31, 37),
    new Cinderella('Grace', 23, 40)
];
for (const cinderella of cinderellaArr) {
    if(cinderella.footSize===prince.footSize){
        console.log(`${cinderella.name} - is the right one!`)
    }
}
let rightCinderella = cinderellaArr.find((cinderella,index) =>{return cinderella.footSize===prince.footSize});
console.log(`${rightCinderella.name} - is the right one!`)