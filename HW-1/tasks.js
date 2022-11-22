//todo: task 2 ✅
/* Напишіть скріпт в зовнішньому файлі, який виводить в консоль ваше прізвище.    
Підключіть створений файл до HTML-документу. */
console.log("Kukuruzova");


//todo: task 3 ✅
/* 3. a) оголосіть дві змінні;
    b) запишіть у змінні будь-які значення;
    c) виведіть на екран значення змінних;
    d) скопіюйте значення однієї змінної в іншу;
    e) виведіть на екран значення змінних. */
let city = "Kyiv";
let population = 3000000;

//alert(`Population of the ${city} is ${population} people`);

city = population;
//alert(`City variable: ${city}, population variable: ${population}`);


//todo: task 4 ✅
//4. Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”. Значення кожної властивості повинно відповідати відповідному примітивному типу даних.
let joe;

const auto = {
    model: "Tesla Model S",
    wheels: 4,
    isElectroEngine: true,
    person: joe,
    tank: null,
};

console.log(auto);


//todo: task 5 ✅
//5. Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult і виведіть в консоль.

/* let isAdult = confirm("Are you adult?");
console.log('isAdult: ', isAdult); */


//todo: task 6 ✅
/* 6. В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних:
	- ваше ім’я
	- ваше прізвище
	- навчальна група
	- ваш рік народження.
Присвойте змінним відповідні значення. 
Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. 
Визначте тип кожної змінної.
Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль. */
const name = "Kateryna";
const lastName = "Kukuruzova";
const group = "Lv-730.JS Core";
const birthYear = 1995;
const isMarried = false;
const children = document.getElementById('noid');
let bitcoin;

console.log(`Birth year: ${birthYear}, ${typeof birthYear};\nMarried: ${isMarried}, ${typeof isMarried};\nName: ${name}, ${typeof name};\nLast name: ${lastName}, ${typeof lastName};\nChildren: ${children}, ${typeof children};\nBitcoin: ${bitcoin}, ${typeof bitcoin};`);


//todo: task 7✅
//7. За допомогою функції prompt() напишіть скріпт, який послідовно запитує в користувача логін, емейл та пароль, і виводить на екран повідомлення із введеними даними. Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.

/* const login = prompt("Please, enter your login.");
const emeil = prompt("Please, enter your emeil.");
const password = prompt("Please, enter your password."); */

//alert(`Dear ${login}, your email is ${emeil}, your password is ${password}`);


//todo: task 8 ✅
//8. Напишіть скріпт, який вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран.
const secondsInMinute = 60;
const secondsInHour = secondsInMinute * 60;
const secondsInDay = secondsInHour * 24;
const secondsInMonth = secondsInDay * 30;

//alert(`There are ${secondsInHour} seconds in hour, ${secondsInDay} seconds in day, ${secondsInMonth} seconds in month`);