// =============================
// Part 1: Variables & Conditionals
// =============================
let userName = "Alex"; // variable declaration
let age = 20;

if (age >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// =============================
// Part 2: Functions
// =============================

// Function 1: Greet user
function greetUser(name) {
  return "Hello, " + name + "! Welcome to the page.";
}

// Function 2: Calculate square of a number
function squareNumber(num) {
  return num * num;
}

// =============================
// Part 3: Loops
// =============================

// Loop 1: Simple for loop (print 1 to 5)
for (let i = 1; i <= 5; i++) {
  console.log("Number: " + i);
}

// Loop 2: While loop (countdown from 3)
let count = 3;
while (count > 0) {
  console.log("Countdown: " + count);
  count--;
}

// =============================
// Part 4: DOM Interactions
// =============================

const outputDiv = document.getElementById("output");
const greetBtn = document.getElementById("greetBtn");
const toggleBtn = document.getElementById("toggleBtn");
const listBtn = document.getElementById("listBtn");

// DOM Interaction 1: Display greeting on button click
greetBtn.addEventListener("click", function() {
  outputDiv.textContent = greetUser(userName);
});

// DOM Interaction 2: Toggle message
toggleBtn.addEventListener("click", function() {
  if (outputDiv.textContent === "") {
    outputDiv.textContent = "This is a toggle message!";
  } else {
    outputDiv.textContent = "";
  }
});

// DOM Interaction 3: Display numbers using loop
listBtn.addEventListener("click", function() {
  let numbers = "";
  for (let i = 1; i <= 5; i++) {
    numbers += i + " ";
  }
  outputDiv.textContent = "Numbers: " + numbers;
});
