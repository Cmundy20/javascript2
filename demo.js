// const bicycle = {
//   color: "blue",
//   electic: false,
//   ride() {
//     console.log("you began to ride!");
//   },
// };
// bicycle.ride();

// class Dog {
//   constructor(color, gender, breed) {
//     (this.color = color), (this.gender = gender), (this.breed = breed);
//   }
//   bark() {
//     console.log(`The ${this.color} dog barked!`);
//   }
// }

// class Cat extends Dog {
//   constructor(color, gender, breed) {
//     super(color, gender, breed);
//   }
//   meow() {
//     console.log(`The ${this.color} cat meowed!`);
//   }
// }

// const dog1 = new Dog("black", "male", "shepard");
// const dog2 = new Dog("white", "female", "poodle");
// const cat1 = new Cat("brown", "male", "bengal");

// dog1.bark();
// dog2.bark();
// cat1.meow();
// console.log(dog1);
// console.log(dog2);
// console.log(cat1);

// let color = (color) => console.log(color);
// let person = function (name) {
//   console.log(name);
// };

function myDisplay(text) {
  document.getElementById("demo").innerHTML = text;
}

function myFirst() {
  myDisplay("Hello");
}

function mySecond() {
  myDisplay("Bye");
}

myFirst();
mySecond();

// color("green");
// person("courtney");

let text = document.getElementById("demo").textContent;
console.log(text);

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);
myDisplay(result);

function myDisplay(text) {
  document.getElementById("demo").innerHTML = text;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplay);
