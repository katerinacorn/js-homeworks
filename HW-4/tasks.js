const LOGGING_STYLES = "background: navy; padding: 5px; font-weight: bold;";

//todo: task 1 ✅
/* 1. Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації. */

const calcRectangleArea = (width, height) => {
    if (typeof width !== "number" || typeof height !== "number") {
        throw new Error("Incorrect arguments.");
    }

    return width * height;
};

try {
    console.log("task 1:", calcRectangleArea(5, 4));
} catch (error) {
    console.log("task 1:", error.message);
}


//todo: task 2 ✅
/* 2. Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік і генерувати в модальному вікні помилки у випадку, коли: 
	- юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your age”), 
	- нечислове значення
	- вік юзера менше 14 років. 
В іншому разі юзер отримує доступ до перегляду фільму.
В блокові catch передбачити виведення назви і опису помилки. */

const checkAge = () => {
    const userAge = +prompt("Enter your age");
    console.log(userAge)

    if (userAge === 0) {
        throw new Error("The field is empty! Please enter your age");
    }

    if (isNaN(userAge)) {
        throw new Error("Not a number");
    }

    if (userAge < 14) {
        throw new Error("You are so young");
    }

    alert("You can watch this film");
};

try {
    checkAge();
} catch (error) {
    alert(`${error.name}, ${error.message}`)
}


//todo: task 3 ✅
/* 3. Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням 'MonthException'.
Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням 'Incorrect month number'.
Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
	Приклад роботи програми:
> console.log(showMonthName(5)); 
May
> console.log(showMonthName(14)); 
MonthException Incorrect month number */

class MonthException {
    constructor(message) {
        this.name = 'MonthException';
        this.message = message;
    }
}

const showMonthName = (month) => {
    const date = new Date();

    if (month > 12 || month <= 0) {
        throw new MonthException("Incorrect month number");
    }

    date.setMonth(month - 1);

    return date.toLocaleString("en-US", {
        month: "long"
    });
};

try {
    console.log("task 3:", showMonthName(1));
} catch (error) {
    console.log("task 3:", error.name, error.message);
}


//todo: task 4 ✅
/* 4. Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.
	Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність, в разі виключної ситуації виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.

	Приклад роботи програми:
showUsers([7, -12, 44, 22]);
Error: ID must not be negative: -12
[ {id: 7}, {id: 44}, {id: 22} ] */

const showUser = (id) => {
    if (id < 0) {
        throw new Error(`ID must not be negative: ${id}`);
    }

    const user = {};
    user.id = id;

    return user;
};


const showUsers = (ids) => {
    const users = [];

    for (const id of ids) {
        try {
            let correctIDUser = showUser(id);
            users.push(correctIDUser);
        } catch (error) {
            console.log(error.message);
        }
    }

    return users;
};

console.log(showUsers([7, -12, 44, 22]));