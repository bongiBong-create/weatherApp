import "./style.css";
import { giphy, weather } from "./helpers/helpers.js"

let location = "Saint-Petersburg";

const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener('click', getWeather)

function getWeather () {
    location = input.value;
    console.log(location)
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${weather}`, {})
        .then(response => {
            return response.json()
        })
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.error(err);
        });
}

