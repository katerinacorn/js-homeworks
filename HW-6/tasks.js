const LOGGING_STYLES = "background: navy; padding: 5px; font-weight: bold;";

//todo: task 1 ✅
//*1:
/* const firstDiv = document.getElementById("test");
firstDiv.textContent = "Last"; */


//*2:
const firstDiv = document.querySelector("#test");
firstDiv.textContent = "Last";


//todo: task 2 ✅
const imageElement = document.querySelector(".image");
imageElement.setAttribute("src", "cat.jpg");
//alert(imageElement.outerHTML);


//todo: task 3 ✅
const allElementsInDiv = document.querySelectorAll("#text>p");
allElementsInDiv.forEach((item, index) => {
    console.log(`Selector text ${index}: ${item.textContent}`)
});

//todo: task 4 ✅
const listElement = document.getElementById("list");

/* const first = listElement.firstElementChild;
const last = listElement.lastElementChild;
const second = listElement.firstElementChild.nextElementSibling;
const fourth = listElement.lastElementChild.previousElementSibling;
const third = second.nextElementSibling;
alert(`${first.innerHTML}, ${last.innerHTML}, ${second.innerHTML}, ${fourth.innerHTML}, ${third.innerHTML}`); */

/* const first = document.getElementById("1");
const last = document.getElementById("5");
const second = document.getElementById("2");
const fourth = document.getElementById("4");
const third = document.getElementById("3");
alert(`${first.innerHTML}, ${last.innerHTML}, ${second.innerHTML}, ${fourth.innerHTML}, ${third.innerHTML}`); */


//todo: task 5 ✅
const heading = document.querySelector("h1");
const paragraphsDiv = document.getElementById("myDiv");
const myList = document.getElementById("myList");
const span = document.querySelector("span");

heading.classList.add("header_big");

const firstParagraph = paragraphsDiv.firstElementChild;
firstParagraph.style.fontWeight = "600";

const secondParagraph = paragraphsDiv.firstElementChild.nextElementSibling;
secondParagraph.style.color = "red";

const thirdParagraph = paragraphsDiv.lastElementChild.previousElementSibling;
thirdParagraph.style.textDecoration = "underline";

const fourthParagraph = paragraphsDiv.lastElementChild;
fourthParagraph.style.fontStyle = "italic";

myList.classList.add("horizontal");
span.style.visibility = "hidden";


//todo: task 6 ✅
/* const field1 = document.getElementById("input1");
const field2 = document.getElementById("input2");

field1.value = prompt("Enter 1 value");
field2.value = prompt("Enter 2 value");

[field1.value, field2.value] = [field2.value, field1.value]; */


//todo: task 7 ✅
const main = document.createElement("main");
main.setAttribute("class", "mainClass check item");
document.body.prepend(main);

const div = document.createElement("div");
div.setAttribute("id", "myDiv");
main.prepend(div);

const p = document.createElement("p");
p.textContent = "First paragraph";
div.prepend(p);