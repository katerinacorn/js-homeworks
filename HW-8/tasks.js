const LOGGING_STYLES = "background: navy; padding: 5px; font-weight: bold;";

//todo: task 1 ✅
const upperCase = str => {
    const regExp = /^[A-Z]/;
    const result = regExp.test(str);

    return result ? "String's starts with uppercase character" : "String's not starts with uppercase character";
};
console.log(upperCase('regexp'));
console.log(upperCase('RegExp'));


//todo: task 2 ✅
const checkEmail = str => {
    const regExp = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/g; //  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const result = regExp.test(str);

    return result ? "Email is correct!" : "Email is not correct!";
};
console.log(checkEmail("Qmail2@gmail.com"));


//todo: task 3 ✅
const findLetter = str => {
    const regExp = /d(b+)(d)/ig;
    const result = regExp.exec(str);

    return result;
};
console.log(findLetter("cdbBdbsbz"));


//todo: task 4 ✅
const reverse = str => {
    const regExp = /\s/;

    return str.split(regExp).reverse().join(",");
};
console.log(reverse("Java Script"));


//todo: task 5 ✅
const validateCardNumber = str => {
    const cardRegEx = /^([0-9]{4})\-([0-9]{4})\-([0-9]{4})\-([0-9]{4})$/;
    const result = cardRegEx.test(str);

    return result ? "Card Number is correct!" : "Card Number is not correct!";
};
console.log(validateCardNumber("9999-9999-9999-9999"));


//todo: task 6 ✅
console.log(checkEmail("my_mail@gmail.com"));
console.log(checkEmail("#my_mail@gmail.com"));
console.log(checkEmail("my_ma--il@gmail.com"));


//todo: task 7 ✅
const checkLogin = str => {
    const regExp = /^[a-z]{1}[0-9a-z\.]{1,9}$/gi;
    const result = regExp.test(str);
    return {
        pass: result,
        numbers: str.match(/\d(\.\d)?/gi),
    };
};
console.log(checkLogin('ee1.1ret3'));
console.log(checkLogin('ee1\*1ret3'));