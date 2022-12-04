const LOGGING_STYLES = "background: navy; padding: 5px; font-weight: bold;";

//todo: task 1 ✅
/* 1. Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
   Наприклад для об’єкта
   let mentor = {
   course: "JS fundamental",
   duration: 3,
   direction: "web-development"
   };
   Результат має бути 3.
   propsCount(mentor); // 3 */

const propsCount = (currentObject) => {
    return Object.keys(currentObject).length;
};

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};

console.log("%ctask 1:", LOGGING_STYLES, propsCount(mentor));


//todo: task 2 ✅
/* 2. Створіть довільний об’єкт, який має 5 полів. Необхідно написати функцію showProps(obj), яка приймає даний об’єкт і виводить список його властивостей записаних в масив. Виведіть також масив значень властивостей об’єкта. */

const auto = {
    model: "Tesla Model S",
    wheels: 4,
    isElectroEngine: true,
    person: "Joe",
    tank: null,
};

const showProps = (obj) => {
    const props = Object.keys(obj);
    const values = Object.values(obj);

    return [props, values];
};

console.log("%ctask 2:", LOGGING_STYLES, showProps(auto));


//todo: task 3 ✅
/* 3. Створіть клас Person, в якого конструктор приймає параметри name і surname, а також міститься метод showFullName(), який виводить ім’я і прізвище особи.
   Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year (рік вступу до університету).
   В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, прізвище, але і по-батькові (midleName) студента.
   Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента (від 1 до 6). Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВУЗу year.
   Приклад результату:
   const stud1 = new Student("Petro", "Petrenko", 2015);
   console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
   console.log("Current course: " + stud1.showCourse()); //Current course: 6 */

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        return `${this.surname} ${this.name}`;
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    showFullName(midleName) {
        return `${super.showFullName()} ${midleName}`;
    }

    showCourse() {
        const today = new Date();
        const currentYear = today.getFullYear();

        let course = currentYear - this.year;
        return course;
    }
}

const stud1 = new Student("Petro", "Petrenko", 2015);
console.groupCollapsed("%ctask 3:", LOGGING_STYLES);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());
console.groupEnd();


//todo: task 4 ➕➖
/* 4. Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів).
   1. клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays.
   2. додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при визначенні зарплати – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
   3. додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
   4. Вивести значення зарплати з новим experience.
   5. Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче. Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі: worker_fullName: salary_value
   6. Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.
 */

class Worker {
    #experience = 1.2;

    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    get getExperience() {
        return this.#experience;
    }

    set setExperience(value) {
        return this.#experience = value;
    }

    showSalary() {
        return this.dayRate * this.workingDays;
    }

    showSalaryWithExperience() {
        return (this.dayRate * this.workingDays * this.#experience);
    }
}

let worker1 = new Worker("John Johnson", 20, 23);

console.groupCollapsed(worker1.fullName);
console.log("Salary:", worker1.showSalary());
console.log("Salary:", worker1.showSalaryWithExperience());
worker1.setExperience = 1.5;
console.log("New experience: " + worker1.getExperience);
console.log("Salary:", worker1.showSalaryWithExperience());
console.groupEnd();

let worker2 = new Worker("Tom Tomson", 20, 22);
worker2.setExperience = 2.7;
let worker3 = new Worker("Andy Ander", 20, 23);

//todo:Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче. Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі: worker_fullName: salary_value 6. Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.

const workers = [];
workers.push(worker1, worker2, worker3);
console.log('workers: ', workers);

workers.sort((a, b) => a.getExperience - b.getExperience).forEach((worker) =>
    console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`)
);


//todo: task 5 ✅
/* 5. Створіть батьківський клас GeometricFigure, який має порожній метод для визначення площі getArea() та метод toString() для виведення назви класу.
   Створіть 3 класи нащадки Triangle, Square і Circle, які наслідуються від класу GeometricFigure. Кожен з дочірніх класів має свою реалізацію методу getArea(), для визначення площі фігури. В конструкторах дочірніх класів передбачити властивості необхідні для визначення площі фігури, наприклад для кола - радіус r.
   Створіть зовнішню функцію handleFigures(figures), яка прийматиме масив об’єктів дочірніх класів figures, перевірятиме чи об’єкт належить батьківському класу з урахуванням наслідування, виводитиме назву створеного об’єкту відповідної фігури, розраховану площу фігури та сумарну площу всіх фігур. Для реалізації функції можете використати метод reduce().
   class GeometricFigure {
   getArea() {
   return 0;
   }
   toString() {
        return Object.getPrototypeOf(this).constructor.name;
   }
        }
   Your code . . .
   const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
        console.log(handleFigures(figures));
*/

class GeometricFigure {
    getArea() {
        return 0;
    }

    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(sideA, sideB) {
        super();
        this.sideA = sideA;
        this.sideB = sideB;
    }

    getArea() {
        return (this.sideA * this.sideB) / 2;
    }

}

class Square extends GeometricFigure {
    constructor(side) {
        super();
        this.side = side;
    }

    getArea() {
        return Math.pow(this.side, 2);
    }

}
class Circle extends GeometricFigure {
    constructor(r) {
        super();
        this.r = r;
    }

    getArea() {
        return (Math.PI * Math.pow(this.r, 2));
    }
}

const handleFigures = (figures) => {
    return figures.reduce((acc, curr) => {
        if (curr instanceof GeometricFigure) {
            console.log(`Geometric figure: ${curr.toString()}, area: ${curr.getArea()}`);
        }
        return acc + curr.getArea();
    }, 0);
};


const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.groupCollapsed("%ctask 5:", LOGGING_STYLES);
console.log('total area:', handleFigures(figures));
console.groupEnd()