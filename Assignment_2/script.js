// Task 1
// get element by id
let taskOneA = document.getElementById("container");
// get element using query selector
let taskOneB = document.querySelector("#container");

// Task 2
// getelementbyclassname
let taskTwoA = document.getElementsByClassName("second");
// get element using query selector
let taskTwoB = document.querySelector(".second");

// Task 3
let taskThree = document.querySelector("ol").querySelector(".third");
console.log(taskThree);

// Task 4
let taskFour = document.getElementById("container");
taskFour.innerText = "Hello!";

// Task 5
let taskFive = document.querySelector("ul");
taskFive.innerHTML += "<li>Four</li>";

// Task 6
let taskSix = document.querySelector("ol");
taskSix.style.backgroundColor = "green";

// Task 7
let taskSeven = document.querySelector(".footer").remove();

// Task 8
document.querySelector(".footer").classList.add("main");

// Task 9
document.querySelector(".footer").classList.remove("main");

// Task 10
document.querySelector(".header").classList.toggle("div");
