//Task one & two
let people = [
  {
    id: 001,
    name: "James",
    age: 24,
    designation: "front-end developer",
    salary: 72000,
    phone: 0546,
  },
  {
    id: 002,
    name: "Philip",
    age: 22,
    designation: "accountant",
    salary: 30000,
    phone: 0879,
  },
  {
    id: 003,
    name: "Simon",
    age: 27,
    designation: "fullstack developer",
    salary: 120000,
    phone: 0545,
  },
  {
    id: 004,
    name: "john",
    age: 19,
    designation: "store clerk",
    salary: 20000,
    phone: 4536,
  },
  {
    id: 005,
    name: "Alfie",
    age: 33,
    designation: "accountant",
    salary: 55000,
    phone: 5690,
  },
];

//Task three
function filterByValue(array, string) {
  return array.filter((o) => {
    return Object.keys(o).some((k) => {
      if (typeof o[k] === "string")
        return o[k].toLowerCase().includes(string.toLowerCase());
    });
  });
}
console.log(filterByValue(people, "developer"));

//Task four
let taskFour = people.filter((item) => {
  return item.age < 30;
});
console.log(taskFour);

//Task five
let taskFive = people.filter((item) => {
  return item.age < 30 && item.salary > 70000;
});
console.log(taskFive);

//Task six
console.log(filterByValue(people, "accountant"));

//Task seven
let taskSeven = people.filter((item) => {
  return item.salary < 40000 && item.designation == "accountant";
});
console.log(taskSeven);

//Task eight
let taskEight = people.filter((item) => {
  return item.id == 005;
});
console.log(taskEight);

//Task nine - is there a way to simplify this? this is as simple as i could make the script
let topSalary = Math.max(...people.map((o) => o.salary));
let taskNine = people.filter((item) => {
  return item.salary == topSalary;
});
let topDesig = taskNine.map((a) => {
  return a.designation;
});
