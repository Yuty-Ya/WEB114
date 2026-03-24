"Use Strict";

let hourly = prompt("What is your hourly wage?");
hourly = Number(hourly);

confirm('Your hour wage is ${hourly}?');

let hoursworked = prompt("How many hours did you work this week?");
hoursworked = hoursworked.trim();
hoursworked = Number(hoursworked);

confirm('You worked ${hoursworked} hours this week?');

let grosspaid = hourly * hoursworked;
let taxes = grosspaid * 0.10;
let netpay = grosspaid - taxes;

console.log('Your pay is: $${netPay.toFixed(2)}');

if (hoursworked > 40) {
    console.log("You worked overtime this week!");
} else if (hoursworked === 40) {
    console.log("You worked exactly 40 hours");
} else {
    console.log("No overtime this week");
}

// semi colons do be great! (i say as i forget them on every line)

if (netpay > 800) {
    console.log("Great paycheck this week!");
} else {
    console.log("Keep working towards a bigger paycheck")
}