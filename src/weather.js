async function getWeather() {
  const locationInp = document.querySelector("#loc").value;

  const APIKEY = "4728c2c8b25f4f70abb182811230809";
  const weather = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${locationInp}`
  );

  const data = await weather.json();

  console.log(data);

  const objData = {
    location: data.location.name,
    statue: data.current.condition.text,
    humedity: data.current.humidity,
    temp: data.current.feelslike_c,
  };

  console.log(objData);

  const location = document.querySelector(".location");
  const statue = document.querySelector(".condition");
  const temp = document.querySelector(".temp");
  const humidity = document.querySelector(".humidity");

  location.textContent = objData.location;
  statue.textContent = objData.statue;
  humidity.textContent = objData.humidity;
  temp.textContent = Math.round(objData.temp);
};

export default getWeather;
