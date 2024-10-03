import "./style.css";
import { giphy, weather } from "./helpers/helpers.js"

const temp = document.querySelector(".city__info-temp");
const search = document.querySelector(".search");
const btn = document.querySelector('.add__city');
const city = document.querySelector('.city');

let location = "Saint-Petersburg";

btn.addEventListener("click", getWeather)

function getWeather () {
    location = search.value
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${weather}`)
        .then(response => {
            return response.json()
        })
        .then(response => {
            const responseTemp = Math.round((response.days[0].temp - 32) * 5/9);
            temp.textContent = responseTemp;
            city.textContent = response.address;
            console.log(response)
        })
        .catch(err => {
            console.error(err);
        });
}
fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${weather}`)
.then(response => {
    return response.json()
})
.then(response => {
    // temp.textContent = response.

    console.log(response)
})
.catch(err => {
    console.error(err);
});

