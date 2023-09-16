import getWeather from "./weather";
import clearInp from "./dom";

const sub = document.querySelector("#sub-btn");
sub.addEventListener("click", () => {
  console.log("clicked");
  getWeather();
  clearInp();
});
console.log("working");
