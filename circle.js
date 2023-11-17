import { calculateCircumference, calculateArea } from "./circlecalc.js";

document.querySelector("#submitButton").addEventListener("click", function (e) {
  submitCircumferenceFunction();
  e.preventDefault();
});

document
  .getElementById("submitAreaButton")
  .addEventListener("click", function (e) {
    submitAreafunction();
    e.preventDefault();
  });

function submitCircumferenceFunction() {
  let radius = circleForm.radius.value;
  document.getElementById("output").innerHTML =
    "The circumference is " + calculateCircumference(radius);
}

function submitAreafunction() {
  let radius = circleForm.radiusForArea.value;
  document.getElementById("outputArea").innerHTML =
    "The area is" + calcluateArea(radius);
}
