// jon g 4/20/26

const button1 = document.getElementById("button1"); // happy
const button2 = document.getElementById("button2"); // calm
const button3 = document.getElementById("button3"); // angry
const button4 = document.getElementById("button4"); // sleep
const button5 = document.getElementById("button5"); // random

const moodtitle = document.getElementById("themoodtitlething");
const moodmes = document.getElementById("moodmes");

function changemood(mood) {

    if (mood === "happy") {
        document.body.style.backgroundColor = "yellow";
        document.body.style.color = "black";
        moodtitle.textContent = "Happy";
        moodmes.textContent = "You are feeling Great! Good!";
    }
    else if (mood === "calm") {
        document.body.style.backgroundColor = "blue";
        document.body.style.color = "black";
        moodtitle.textContent = "Calm";
        moodmes.textContent = "Everything is peaceful. For now.";
    }
    else if (mood === "angry") {
        document.body.style.backgroundColor = "red";
        document.body.style.color = "white";
        moodtitle.textContent = "Angry";
        moodmes.textContent = "Breath in and out, Slowly.";
    }
    else if (mood === "sleepy") {
        document.body.style.backgroundColor = "purple";
        document.body.style.color = "white";
        moodtitle.textContent = "Sleep";
        moodmes.textContent = "Sleep Time.";
    }
}


function handlebutton1pressed() {
    changemood("happy");
}

function handlebutton2pressed() {
    changemood("calm");
}

function handlebutton3pressed() {
    changemood("angry");
}

function handlebutton4pressed() {
    changemood("sleepy");
}

function handlebutton5pressed() {
    const everythingelse = ["happy", "calm", "angry", "sleepy"];
    const random = Math.floor(Math.random() * everythingelse.length);
    const random2 = everythingelse[random]
    changemood(random2);
}

button1.addEventListener("click", handlebutton1pressed);
button2.addEventListener("click", handlebutton2pressed);
button3.addEventListener("click", handlebutton3pressed);
button4.addEventListener("click", handlebutton4pressed);
button5.addEventListener("click", handlebutton5pressed);

