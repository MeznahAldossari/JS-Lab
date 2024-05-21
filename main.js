// ============================ Lab 1==================================
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

// ============================ Lab 2 ==================================
console.log(
  "============================ Lab 2 =================================="
);

//1

let eatsPlants = false;
let eatsAnimals = true;

let animal =
  eatsPlants && eatsAnimals
    ? "omnivore"
    : eatsPlants
    ? "herbivore"
    : eatsAnimals
    ? "carnivore"
    : undefined;

console.log(`(${eatsPlants} , ${eatsAnimals}, ${animal})`);

//2
let musicians = 1;

if (musicians <= 0) {
  console.log("not a group");
} else if (musicians == 1) {
  console.log("solo");
} else if (musicians == 2) {
  console.log("duet");
} else if (musicians == 3) {
  console.log("duet");
} else if (musicians == 4) {
  console.log("trio");
} else {
  console.log("this is a large group");
}

//4
let balance = 3231;
let checkBalance = true;
let isActive = true;
if (checkBalance && isActive && balance < 5) {
  console.log("the balance has been checked");
} else if (checkBalance && !isActive && balance > 5) {
  console.log("the balance has been checked");
} else if (checkBalance && isActive && balance > 5) {
  console.log("the balance has been checked");
}

//5
let flavor = true;
let vessel = true;
let toppings = true;

if (
  flavor == "vanilla" ||
  (flavor == "chocolate" && vessel == "cone") ||
  (vessel == "bowl" && toppings == "sprinkles") ||
  toppings == "peanuts"
) {
  console.log(
    "I'd like two scoops of __________ ice cream in a __________ with __________."
  );
}

//3 ????

var room = "billiards room";

var suspect = "Mr. Parkes";

var weapon = room;
var solved = false;

//
