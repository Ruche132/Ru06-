const celsiusValue = document.querySelector("#valueCelsius");
const typeDegree = document.querySelector("#valueDegree");
const convertBtn = document.querySelector("#convertion");
const typeOfTemp = document.querySelector("#temperature");

window.addEventListener("load", () => {
  typeDegree.value = "";
  celsiusValue.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  changeToCelsius();
});

function changeToCelsius() {
  let inputV = typeDegree.value;

  if (typeOfTemp.value === "fahrenheit") {
    const FToC = (inputV - 32) * (5 / 9);
    celsiusValue.innerHTML = `${FToC.toFixed(3)} &deg;c`;
  } else if (typeOfTemp.value === "kelvin") {
    const KToC = inputV - 273.15;
    celsiusValue.innerHTML = `${KToC.toFixed(3)} &deg;c`;
  }
}