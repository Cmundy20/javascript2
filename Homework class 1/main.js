// toggle menu in small view
const toggleMenu = () => {
  document.querySelector("#menu").classList.toggle("open");
};

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(10, 5);
myDisplay(result);
