const LOGGING_STYLES = "background: navy; padding: 5px; font-weight: bold;";

//todo: task 1 ✅
/* 1. Заданий масив з елементами [2, 3, 4, 5]. За допомогою циклу for знайдіть добуток елементів цього масиву. Також реалізуйте завдання через while. */

const array = [2, 3, 4, 5];
let result = 1;

//*1
/* for (let i = 0; i < array.length; i += 1) {
    result *= array[i];
} */

console.log("%ctask 1:", LOGGING_STYLES, result)

//*2
let index = 0;
while (index < array.length) {
    result *= array[index];
    index += 1;
}

console.log("%ctask 1:", LOGGING_STYLES, result)


//todo: task 2 ✅
/* 2. Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15. Для кожної ітерації він перевірятиме, чи є поточне число парним чи непарним, і відображатиме повідомлення на екрані.
Sample Output: 
"0 is even" 
"1 is odd" 
"2 is even"  */

for (let i = 0; i <= 15; i += 1) {
    if (i % 2 === 0) {
        //alert(`${i} is even`);
    }

    if (i % 2 !== 0) {
        //alert(`${i} is odd`);
    }
}


//todo: task 3 ✅
/* 3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.

Sample Output:
randArray(5);  // [399,310,232,379,40] */

const randArray = (k) => {
    const array = [];
    for (let i = 0; i < k; i += 1) {
        array.push(Math.round(Math.random() * 500) + 1);
    }

    return array;
};

console.log("%ctask 3:", LOGGING_STYLES, randArray(5))


//todo: task 4 ✅
/* 4. Напишіть функцію raiseToDegree(a,b), яка повертає результат піднесення числа a до степеня b. Функція працює тільки з цілими числами. Реалізувати інтерфейс введення чисел a, b з клавіатури.

Sample Output:
raiseToDegree(3, 4);  // 81 */
const numberInputElement = document.getElementById("number");
const powerInputElement = document.getElementById("power");
const formElement = document.getElementById("form");

const raiseToDegree = (a, b) => {
    return Math.pow(a, b);
};

let numberValue, powerValue;

numberInputElement.addEventListener("change", (event) => {
    numberValue = event.target.value;
});

powerInputElement.addEventListener("change", (event) => {
    powerValue = event.target.value;
});

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    if (numberValue % 1 !== 0 || powerValue % 1 !== 0) {
        alert("Please, enter an integer");
    } else {
        console.log("%ctask 4", LOGGING_STYLES, raiseToDegree(numberValue, powerValue));
    }
});


//todo: task 5 ✅
/* 5. Реалізуйте функцію – findMin(), яка повинна приймати довільну кількість числових аргументів і повертати той, який має найменше значення. Порада: для розв’язку можете скористатися спеціальним масивом arguments.
Sample Output:
findMin(12, 14, 4, -4, 0.2); // => -4 */

const findMin = (...arguments) => {
    return arguments.reduce((prev, curr) => prev < curr ? prev : curr);
};

console.log("%ctask 5", LOGGING_STYLES, findMin(12, 14, 4, -4, 0.2));

//todo: task 6 ✅
/* 6. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
Sample Output:
findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true */

const findUnique = (arr) => {
    return arr.some((element, index) => arr.indexOf(element) !== index) ? false : true;
};

console.groupCollapsed("%ctask 6", LOGGING_STYLES);
console.log('findUnique([1, 2, 3, 5, 3]): ', findUnique([1, 2, 3, 5, 3]));
console.log('findUnique([1, 2, 3, 5, 11]): ', findUnique([1, 2, 3, 5, 11]));
console.groupEnd();


//todo: task 7 ✅
/* 7. Напишіть функцію, яка повертає останній елемент масиву. Функція може приймати 2 параметра: 1-ий масив, 2-ий числовий параметр, що відповідає кількості 'х' останніх елементів масиву, які треба вивести.

Sample Output:
console.log(lastElem([3, 4, 10, -5]));      // -5
console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5] */

const getLastElements = (array, number) => {
    if (!number) {
        return array.pop();
    } else {
        return array.slice(-number);
    }
};

console.groupCollapsed("%ctask 7", LOGGING_STYLES)
console.log(getLastElements([3, 4, 10, -5])); // -5
console.log(getLastElements([3, 4, 10, -5], 2)); // [10, -5]
console.log(getLastElements([3, 4, 10, -5], 8)); // [3, 4, 10, -5]
console.groupEnd();


//todo: task 8 ✅
/* 8. Напишіть функцію, яка приймає рядок як параметр і перетворює першу букву кожного слова рядка в верхній регістр.

Input string: 'i love java script' 
Output string: 'I Love Java Script' */

const toTitleCase = (string) => {
    return string.split(" ").map((item) => item.charAt(0).toUpperCase() + item.slice(1)).join(" ");
};

console.log("%ctask 8", LOGGING_STYLES, toTitleCase('i love java script'));