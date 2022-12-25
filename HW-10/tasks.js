const LOGGING_STYLES = "background: navy; padding: 5px; font-weight: bold;";

//todo: task 1 ✅
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]


//todo: task 2 ✅
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};

let {
    names: [, name2, , name4],
    ages: [, age2, , age4]
} = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26


//todo: task 3 ✅
function mul(...args) {
    const onlyNumbers = args.filter(argument => typeof argument === "number");

    if (onlyNumbers.length === 0) {
        return 0;
    }

    return onlyNumbers.reduce((prev, curr) => prev * curr);
};

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0


//todo: task 4  ---
let server = {
    data: 0,

    convertToString: callback => {
        callback((() => {
            return this.data + "";
        }).bind(this));
    }


    /* convertToString: function (callback) {
        callback((function () {
            return this.data + "";
        }).bind(this));
    } */
};

let client = {
    server: server,
    result: "",

    calc: data => {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },

    notification: () => {
        return (() => {
            this.result = callback();
        }).bind(this)
    },


    /* calc: function (data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    }, */
    /*  notification: function () {
         return (function (callback) {
             this.result = callback();
         }).bind(this);
     } */
};
/* client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string" */

//Змініть код використовуючи стрілкові функції, щоб в коді не використовувалися методи bind().


//todo: task 5 ✅ 
const mapBuilder = (keysArray, valuesArrays) => {
    const map = new Map();

    keysArray.forEach((key, index) => map.set(key, valuesArrays[index]));

    return map;
};

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log('map: ', map);
console.log(map.size); // 4
console.log(map.get(2)); // "span"