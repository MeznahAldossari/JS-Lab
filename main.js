//1
let widht = 20;
let height = 10;
let result = widht * height;

console.log("The area of the rectangle is: " + result);

// 2
let degree = 38;
let F = degree * 1.8 + 32;
console.log("F is: " + F);
let C = (F - 32) / 1.8;
console.log("C is: " + C);

// 3
let hours = 100;
let sec = 3600;
let sec1 = hours * sec;
console.log(hours + "hours =" + sec1 + " second");

//4
let thingOne = 167;
let thingTwo = "My lenght is";
console.log(thingTwo + ": " + thingOne);

// 5
var bill = 10.25 + 3.99 + 7.15;
var tip = 0.15 * bill;
var total = bill + tip;

console.log(total);

//---
// 6
var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";
var madLib = `The Intro to JavaScript course is ${adjective1}. James and Julia are so ${adjective2}. I cannot wait to work through the rest of this ${adjective3} content!`;
console.log(madLib);
//----

// 7
var firstName = "Julia";
var interest = "cats";
var hobby = "play video games";
var awesomeMessage = `Hi, my name is ${firstName}. I love ${interest}. In my spare time, I like to ${hobby}.`;
console.log(awesomeMessage);
