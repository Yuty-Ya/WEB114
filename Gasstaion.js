// jon g 4/13/26
"use strict"

let entries = 0;
let Gas = 0;

let name = prompt("Enter your name please");

if (username === null) {
    alert("You closed the name prompt.");
} else if (username.trim() === "") {
    alert("You didnt put anything.");
} else {
    username = username.trim();

    let average = calcgasavg();

    if (average === null) {
        alert("You closed the gas totals prompt");
    } else {
        let message = "";
    

        if (entrycount === 0) {
            message = "No gas totals were entered";
        } else if (entrycount === 1) {
            message = `${username}, your gas total is $${totalgas.toFixed(2)};`
        } else {
            message = `${username}, your average weekly gas bill is $${average.toFixed(2)};`
        }

        alert(message);

        let entrymessage = ""

        if (entrycount === 0) {
            entrymessage ="no gas total were entered";
        } else if (entrycount === 1) {
            entrymessage = "you entered 1 gas total";
        } else {
            entrymessage = `you entered ${entrycount} gas total`;
        }
        alert(entrymessage);
    }
}

function calcgasavg() {
    let input = prompt("Enter your first weeks gas total, Enter -1 when done")

    if (input === null) {
        return null;
    }

    let weeklyGas = parseFloat(input);

    while (weeklyGas !== -1) {
        if (isNaN(weeklyGas)) {
            alert("Please enter a valid number");

            input = prompt("Enter your gas total again. Enter -1 when done");
            if (input === null) {
                return null;
            }

            weeklyGas = parseFloat(input);
            continue;
        }

        totalgas += weeklyGas;
        entrycount++;

        input = prompt("Enter your next week gas total. Enter -1 when done");
        if (input === null) {
            return null;
        }
        weeklyGas = parseFloat(input);
    }

    if (entrycount > 0) {
        return totalgas / entrycount;
    } else {
        return 0;
    }
}