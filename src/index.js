import "./style.css";
import { getDate, getWeather } from "./helpers/date.js";

const btn = document.querySelector(".add__city");

btn.addEventListener("click", getWeather);

setInterval(function () {
    getDate()
}, 1000);

getWeather()