const LOGGING_STYLES = "background: navy; padding: 5px; font-weight: bold;";

//todo: task 1 ✅
//const newWindow = window.open("http://127.0.0.1:5500/HW-6/", "homework6", "width=300, height=300");
const resize = (window) => window.resizeTo(500, 500);
const relocate = (window) => window.moveTo(200, 200);
const close = (window) => window.close();

/* setTimeout(resize, 2000, newWindow);
setTimeout(relocate, 4000, newWindow);
setTimeout(close, 6000, newWindow); */


//todo: task 2 ✅
const textEl = document.getElementById("text");
const buttonEl = document.getElementById("button");

const changeCSS = (element) => {
    element.classList.add("styled");
};

buttonEl.addEventListener("click", () => {
    changeCSS(textEl);
});


//todo: task 3 ✅
const linkEl = document.getElementById("link");
const firstButtonEl = document.getElementById("first-btn");
const secondButtonEl = document.getElementById("second-btn");
const thirdButtonEl = document.getElementById("third-btn");

firstButtonEl.addEventListener("click", () => {
    document.body.style.backgroundColor = "blue";
});

secondButtonEl.addEventListener("dblclick", () => {
    document.body.style.backgroundColor = "pink";
});

thirdButtonEl.addEventListener("mousedown", () => {
    document.body.style.backgroundColor = "brown";
});

thirdButtonEl.addEventListener("mouseup", () => {
    document.body.style.backgroundColor = "white";
});

linkEl.addEventListener("mouseover", () => {
    document.body.style.backgroundColor = "yellow";
});

linkEl.addEventListener("mouseout", () => {
    document.body.style.backgroundColor = "white";
});


//todo: task 4 ✅
const selectListEl = document.getElementById("select");
const deleteBtnEl = document.getElementById("delete");

let selection;
selectListEl.addEventListener("change", (event) => {
    selection = event.target.value;
});

deleteBtnEl.addEventListener("click", () => {
    for (let i = 0; i < selectListEl.length; i += 1) {
        if (selectListEl.options[i].value === selection) {
            selectListEl.remove(i);
        }
    }
});



//todo: task 5 ✅
const magicButtonEl = document.getElementById("magic");
const descriptionEl = document.getElementById("description");

magicButtonEl.addEventListener("click", () => {
    descriptionEl.textContent = "I was pressed!";
});

magicButtonEl.addEventListener("mouseover", () => {
    descriptionEl.textContent = "Mouse on me!";
});

magicButtonEl.addEventListener("mouseleave", () => {
    descriptionEl.textContent = "Mouse is not on me!";
});


//todo: task 6 ✅
const widthEl = document.getElementById("width");
const heightEl = document.getElementById("height");

widthEl.textContent = window.innerWidth;
heightEl.textContent = window.innerHeight;

window.addEventListener("resize", () => {
    widthEl.textContent = window.innerWidth;
    heightEl.textContent = window.innerHeight;
});

//todo: task 7 ✅
const germanyCities = ["Cologne", "Frankfurt", "Dusseldorf"];
const ukraineCities = ["Kyiv", "Kharkiv", "Lviv"];
const usaCities = ["Miami", "Los Angeles", "San-Francisco"];
const selectCityEl = document.getElementById("cities");
const selectCountryEl = document.getElementById("country");
const paragraphEl = document.querySelector("#task7 p");

const setCities = cities => {
    return cities.forEach(city => {
        selectCityEl.innerHTML += `<option>${city}</option>`;
    });
};

document.addEventListener("DOMContentLoaded", () => {
    setCities(germanyCities);
});

selectCountryEl.addEventListener("change", (event) => {
    selectCityEl.innerHTML = "";
    switch (event.target.value) {
        case "Ukraine":
            setCities(ukraineCities);
            break;
        case "USA":
            setCities(usaCities);
            break;
        case "Germany":
            setCities(germanyCities);
            break;
    }

    const selectedCountry = event.target.value;
    const selectedCity = selectCityEl.value;
    paragraphEl.textContent = `Current country is ${selectedCountry} and current city is ${selectedCity}`;
});