const LOGGING_STYLES = "background: navy; padding: 5px; font-weight: bold;";

//todo: task 1 ✅
/* 1. Є такий код:
Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними х і у. */
let x = 1;
let y = 2;

let res1 = x + "" + y; // Допишіть код, необхідно використовувати змінні x і y
console.groupCollapsed("%ctask 1", LOGGING_STYLES);
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x) + "" + y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x + y); // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = x ** Infinity - y; // Допишіть код, необхідно використовувати змінні x і y ➖➖➖
console.log(res4); // NaN
console.log(typeof res4); // "number"
console.groupEnd();


//todo: task 2 ✅
/* 
2. Користувач вводить число (використовуйте prompt ()). Необхідно перевірити чи є введене число
	a) парним додатним;
	b) кратним числу 7.
Результат перевірки вивести в консоль.
 */

/* const userNumber = prompt("Please, enter a number");

if (!userNumber) {
    console.log("%ctask 2", LOGGING_STYLES, "There is no number :(")
}


if (userNumber % 2 === 0 && userNumber > 0) {
    console.log("%ctask 2", LOGGING_STYLES, "Number is even and positive");
}

if (userNumber && userNumber % 7 === 0) {
    console.log("%ctask 2", LOGGING_STYLES, "Number is multiple of 7");
} */


//todo: task 3 ✅
/* 3. Створіть порожній масив;
1) У перший елемент масиву запишіть будь-яке число;
2) У другий елемент масиву запишіть будь-який рядок;
3) У третій елемент масиву запишіть будь-яке логічне значення;
4) У четвертий елемент масиву запишіть значення null;
5) Виведіть на екран число елементів, яке зберігається в масиві;
6) Запитайте у користувача ввести будь-яке значення і запишіть це значення в п'ятий елемент масиву;
7) Виведіть на екран п'ятий елемент масиву.
8) Видаліть 1-ий елемент масиву і виведіть масив на екран. */

const array = [];

array.push(2);
array.push("hola");
array.push(true);
array.push(null);

const firstSubheadingElement = document.getElementById("3-1");
const secondSubheadingElement = document.getElementById("3-2");
const thirdSubheadingElement = document.getElementById("3-3");

firstSubheadingElement.textContent = `(task 3) Array elements count: ${array.length}`;

/* const userAnswer = prompt("Enter any value, please.");

array.push(userAnswer);
secondSubheadingElement.textContent = `(task 3) 5th element of array: ${array[4]}`;

array.shift();
thirdSubheadingElement.textContent = `(task 3) New array: ${array}`; */


//todo: task 4 ✅
/* 4. Напишіть програму, яка об’єднує всі наявні елементи масиву в стрічку і розділяє їх символом “*”.
Початковий масив:
let cities = ["Rome", "Lviv", "Warsaw"]; 
Результат:
"Rome*Lviv*Warsaw" */
let cities = ["Rome", "Lviv", "Warsaw"];
const citiesString = cities.join("*");

console.log("%ctask 4:", LOGGING_STYLES, citiesString);


//todo: task 5 ✅
/* 5. Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. Якщо вік менше 18 років вивести “Ви ще надто молоді”,  */
/* let isAdult = prompt("Enter your age, please.");

if (isAdult > 18) {
    alert("you are adult");
} else if (isAdult < 18) {
    alert("you are very young");
} */


//todo: task 6 ➕➖
/* 6. Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
Необхідно 
	a) визначити і вивести в консоль площу трикутника 
	b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘. Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).   */
const triangleSides = [];

const sideA = prompt("1. Enter triangle first side length");
const sideB = prompt("2. Enter triangle second side length");
const sideC = prompt("3. Enter triangle third side length");

triangleSides.push(sideA, sideB, sideC);
//console.log('triangleSides: ', triangleSides);

let sumOfSidesLength = 0;

//!iterator only 1st element
const isNumericItems = (array) => {
    const regExp = /[0-9]/;
    let result;

    for (const iterator of array) {
        if (!regExp.test(iterator)) {
            return result = false;
        } else {
            result = true;
        }
    }

    return result;
};

console.log("FOO", isNumericItems(triangleSides));

if (!isNumericItems(triangleSides)) {
    console.log("Incorrect data");
} else {
    sumOfSidesLength = triangleSides.reduce((prev, curr) => +prev + +curr, 0);
    console.log('sumOfSidesLength: ', sumOfSidesLength);

    const semiperimeter = sumOfSidesLength / 2;
    const area = Math.sqrt(semiperimeter * (semiperimeter - sideA) * (semiperimeter - sideB) * (semiperimeter - sideC)).toFixed(3);
    console.log("%ctask 6:", LOGGING_STYLES, "S =", area);

    //todo: find longest side ✅
    const longestSide = triangleSides.reduce((prev, curr) => prev > curr ? prev : curr);
    console.log('longestSide: ', longestSide);

    //todo:  longest2 = a2 + b2; 
    const otherSides = triangleSides.filter(element => element < longestSide);
    console.log('otherSides: ', otherSides);

    const sumOfSquareOtherSides = Math.pow(otherSides[0], 2) + Math.pow(otherSides[1], 2);
    console.log('sumOfOtherSides: ', sumOfSquareOtherSides);

    if (Math.pow(longestSide, 2) === sumOfSquareOtherSides) {
        console.log("The triangle is right-angled");
    }
}



//todo: task 7 ✅
/* 7. Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”. */

let today = new Date();
let timeOfDay = today.getHours();

console.log('timeOfDay: ', timeOfDay);

const headingElement = document.getElementById("heading");

//*1:
if (timeOfDay === 23 || timeOfDay < 5) {
    headingElement.textContent = "Good night 🌃";
} else if (timeOfDay >= 5 && timeOfDay < 11) {
    headingElement.textContent = "Good morning 🌅";
} else if (timeOfDay >= 11 && timeOfDay < 17) {
    headingElement.textContent = "Good afternoon ☀️";
} else if (timeOfDay >= 17 && timeOfDay < 23) {
    headingElement.textContent = "Good evening 🌇";
} else {
    headingElement.textContent = "I don't know what time of day is it :(";
}

//*2:
switch (true) {
    case (timeOfDay === 23 || timeOfDay < 5): {
        console.log("%ctask 7:", LOGGING_STYLES, "good night");
        break;
    }

    case (timeOfDay >= 5 && timeOfDay < 11): {
        console.log("%ctask 7:", LOGGING_STYLES, "good morning");
        break;
    }

    case (timeOfDay >= 11 && timeOfDay < 17): {
        console.log("%ctask 7:", LOGGING_STYLES, "good afternoon");
        break;
    }

    case (timeOfDay >= 17 && timeOfDay < 23): {
        console.log("%ctask 7:", LOGGING_STYLES, "good evening");
        break;
    }

    default: {
        console.log("%ctask 7:", LOGGING_STYLES, "I don't know what time of day is it :(");
        break;
    }
}