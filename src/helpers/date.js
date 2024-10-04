import {weather, location} from "./helpers.js";
const search = document.querySelector(".search");
const temp = document.querySelector(".city__info-temp");
const city = document.querySelector(".city");

const options = {
  month: "long",
  day: "numeric",
  weekday: "long",
  hour: "numeric",
  minute: "numeric",
};

const dateInfo = document.querySelector(".date");

export function getDate() {
  const date = new Date();
  return dateInfo.innerText = date.toLocaleString("ru", options)
}

export function getWeather() {
  location = search.value;
  fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${weather}`)
      .then((response) => {
          return response.json();
      })
      .then((response) => {
          const responseTemp = Math.round(((response.days[0].temp - 32) * 5) / 9) + "°";
          temp.textContent = responseTemp;
          city.textContent = response.address;
          console.log(response);
      })
      .catch((err) => {
          console.error(err);
      });
  }
