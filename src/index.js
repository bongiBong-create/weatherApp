import "./style.css";
import {app} from "./scripts/date.js"
import { getImg } from "./scripts/getImage.js";

const search = document.querySelector(".search");

search.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        render(search.value);
        search.value = "";
    }
})

async function render(value) {
    await app(value);
    getImg(value)
}

render("Корсаков")