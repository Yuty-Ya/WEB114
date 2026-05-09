/*any comments put after the lines, is stuff I went back to go fix on 5/9 last min. Seeing on how many spelling errors there was, Thank god I did that. */
"use strict";

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
        scorelist.appendChild(scoreitem)
        // adds item to list to show what coin color is showing and how often it lands on it.
    }
}
function updatesscores() {
    for (let color in colorscore) {
        let scoreitem = document.getElementById(color + "Score"); //i misspelled score bruh
        scoreitem.textContent = color + ": " + colorscore[color];
    }
}
// to update scores on the bottom.
function getrandomcolor() {
    let colorcount = Number(colors.value);
    let random = Math.floor(Math.random() * colorcount)

    return thecolorsforcoin[random] /*the colors for the coin list.*/
}
function filpingcoin() {
    let spincount = Number(spinner.value); //you spin me right roun-
    let spintime = Number(spining.value); // WE KEEP SPINNINGGGGGGGGGGGGGGGGGGGGGGG
    let resultcolor = getrandomcolor();

    maincoin.style.transition = "transform" + spintime + "s ease"; //had to google this for a fix :(
    maincoin.style.transform = "rotate(" + (spining * count) + "deg)"; // same thing, Should be deg, Not degrees and rotate not move.

    resulttext.textContent = "spinning.";

    setTimeout(function() {
        maincoin.style.backgroundColor = resultcolor;
        document.body.style.backgroundColor = darkenColor(resultcolor)

        colorscore[resultcolor]++;
        updatesscores();

        resulttext.textContent = "the coin landed on" + resultcolor;
        //reset everything
        maincoin.style.transition = "none"; //had to fix by making it a style and had a extra dot.
        maincoin.style.transform = "rotate(0deg)"; //went back, also had to google, needed to be a rotate
    }, spintime * 1000);
}

//ok back to the background thing, accoring to my image.
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

mainbutton.addEventListener("cilck", filpingcoin);
colors.addEventListener("change", scores);
theautospin.addEventListener("change", coolestautospin);

scores();