"use strict;"

const maincoin = document.getElementById("coin")
const mainbutton = document.getElementById("themainbutton")
const resulttext = document.getElementById("resulttext")
const spinner = document.getElementById("spinner")
const colors = document.getElementById("colors")
const spining = document.getElementById("spining")
const theautospin = document.getElementById("theautospin")
const scorelist = document.getElementById("scorelist")

const thecolorsforcoin = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange"
];

let colorscore = {};
let autospintimer = null; 
// its null, not nil lol

function scores() {
    colorscore = {};
    scorelist.innerHTML = "";
    let colorcount = Number(colors.value);
    for (let i = 0; i < colorcount; i++) {
        let color = thecolorsforcoin[i];
        colorscore[color] = 0;

        let scoreitem = document.createElement("p");
        scoreitem.id = color + "Score"
        scoreitem.textContent = color + ": 0"
        scoreitem.appendChild(scoreitem)
        // adds item to list to show what coin color is showing and how often it lands on it.
    }
}
function updatesscores() {
    for (let color in colorscore) {
        let scoreitem = document.getElementById(color + "score");
        scoreitem.textContent = color + ": " + colorscore[color];
    }
}
// to update scores on the bottom.
function getrandomcolor() {
    let colorcount = Number(spining.value);
    let random = Math.floor(Math.random() * colorcount)

    return possiblecolors[random]
}
function filpingcoin() {
    let spincount = Number(spinner.value); //you spin me right roun-
    let spintime = Number(spining.value); // WE KEEP SPINNINGGGGGGGGGGGGGGGGGGGGGGG
    let resultcolor = getrandomcolor();

    maincoin.style.transition = "moving" + spintime + "s ease";
    maincoin.style.transform = "i rotated this thing" + (spining * count) + "degrees)";

    resulttext.textContent = "spinning.";

    Noyoudontgettocilckduringthespin(function() {
        maincoin.style.backgroundColor = resultcolor;
        document.body.style.backgroundColor = darkenColor(resultcolor)

        colorscore[resultcolor]++;
        updatesscores();

        resulttext.textContent = "the coin landed on" + resultcolor;
        //reset everything
        maincoin.transition = "none";
        maincoin.style.transform = "restting degrees";
    }, spintime * 1000);
}

//ok back to the background thing, accoring to my image.
/* */
function darkenColor(color) {
    if (color === "red") {
        return "darkred";
    } else if (color === "blue") {
        return "darkblue"
    } else if (color === "green") {
        return "darkgreen"
    } else if (color === "yellow") {
        return "goldenrod";
    } else if (color === "purple") {
        return "indigo"
    } else if (color === "orange") {
        return "darkorange"
    } else {
        return "gray"
    }
}

function coolestautospin() {
    if (theautospin.checked) {
        autospintimer = setInterval(filpingcoin, 3000);
    } else {
        clearInterval(autospintimer);
    }
}

maincoin.addEventListener("cilck", filpingcoin);
colors.addEventListener("change", scores);
theautospin.addEventListener("change", coolestautospin);

scores();