import getWeather from "./weather";
import clearInp from "./dom";

getWeather();
const sub = document.querySelector("#sub-btn");
sub.addEventListener("click", () => {
  getWeather();
  clearInp();
});
