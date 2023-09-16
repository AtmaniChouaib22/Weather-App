async function getWeather() {
  // get user input or set to default
  const locationInp = document.querySelector("#loc").value || "constantine";
  // fetching the api
  const APIKEY = "4728c2c8b25f4f70abb182811230809";
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${locationInp}`
  );
  const data = await response.json();

  // fetching the api code condition data
  const images = await fetch(
    "https://www.weatherapi.com/docs/weather_conditions.json"
  );
  const imData = await images.json();

  // constructing an object with needed data
  const objData = {
    code: data.current.condition.code,
    location: data.location.name,
    country: data.location.country,
    statue: data.current.condition.text,
    humidity: data.current.humidity,
    temp: data.current.feelslike_c,
  };

  // appending elements to DOM
  const location = document.querySelector(".location");
  const statue = document.querySelector(".condition");
  const temp = document.querySelector(".temp");
  const humidity = document.querySelector(".humidity");
  const img = document.querySelector("#icon");

  // finding the right icon
  function findIcon() {
    imData.forEach((element) => {
      if (element.code === objData.code) {
        img.src = `./assets/64x64/day/${element.icon}.png`;
      }
    });
  }

  findIcon();

  location.textContent = `${objData.location},${objData.country}`;
  statue.textContent = objData.statue;
  humidity.textContent = `humidity ${objData.humidity}%`;
  temp.textContent = `Temperature ${Math.round(objData.temp)}c`;
}

export default getWeather;
