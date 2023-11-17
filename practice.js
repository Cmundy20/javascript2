const home = {
  color: "white",
  shutters: "black",
  garage: "2 Car",
  Acre: "1.5",
  purchase() {
    console.log("Make an offer!");
  },
  interest() {
    console.log("Added to your favorite's list");
  },
};
home.interest();

class Toddler {
  constructor(age, gender, bedtime, favoritecolor) {
    (this.age = age),
      (this.gender = gender),
      (this.bedtime = bedtime),
      (this.favoritecolor = favoritecolor);
  }
  wakeup() {
    console.log(`The ${this.age} year old ${this.gender} toddler woke up!`);
  }
}

class Adult extends Toddler {
  constructor(age, gender, bedtime, favoritecolor) {
    super(age, gender, bedtime, favoritecolor);
  }

  work() {
    console.log(`The ${this.age} year old ${this.gender} went to work.`);
  }
}

const toddlera = new Toddler("2", "female", "8 PM", "pink");
const toddlerb = new Toddler("1", "male", "7:30 PM", "green");
const adultc = new Adult("34", "female", "9 PM", "red");
const adultm = new Adult("32", "male", "10PM", "black");
toddlera.wakeup();
toddlerb.wakeup();
adultm.work();
console.log(toddlera.age);
console.log(toddlerb.bedtime);
