// Task 1
// let user = {
//   userName: "Polina",
//   age: 15,
//   showUserName() {
//     return this.userName;
//   },
//   updateAge() {
//     return this.age + 1;
//   },
// };

// console.log(user.showUserName());
// console.log(user.updateAge());

// Task 2
// let sum = 0;
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const people = Object.keys(salaries);
// for (let i = 0; i < people.length; i++) {
//   sum += salaries[people[i]];
// }

// console.log(sum);

// Task 3
const calculator = {
  read() {
    calculator.a = Number(prompt("Введіть 1 число"));
    calculator.b = Number(prompt("Введіть 2 число"));
  },
  sum() {
    return this.a + this.b;
  },
  mult() {
    return this.a * this.b;
  },
};

console.log(calculator);
console.log(calculator.read());
console.log(calculator);
console.log(calculator.sum());
console.log(calculator.mult());

// Task 4
// const cafe = {
//   name: "Republic",
//   width: 200,
//   height: 300,
//   personal: 5,
//   hr: true,
// };

// arr = Object.entries(cafe);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i][0] + " - " + arr[i][1]);
// }
// square = cafe.width * cafe.height;

// console.log(`Площа будівлі: ${square}`);
