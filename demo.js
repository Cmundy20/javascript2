const bicycle = {
  color: "blue",
  electic: false,
  ride() {
    console.log("you began to ride!");
  },
};
bicycle.ride();

class Dog {
  constructor(color, gender, breed) {
    (this.color = color), (this.gender = gender), (this.breed = breed);
  }
  bark() {
    console.log(`The ${this.color} dog barked!`);
  }
}

class Cat extends Dog {
  constructor(color, gender, breed) {
    super(color, gender, breed);
  }
  meow() {
    console.log(`The ${this.color} cat meowed!`);
  }
}

const dog1 = new Dog("black", "male", "shepard");
const dog2 = new Dog("white", "female", "poodle");
const cat1 = new Cat("brown", "male", "bengal");

dog1.bark();
dog2.bark();
cat1.meow();
console.log(dog1);
console.log(dog2);
console.log(cat1);
