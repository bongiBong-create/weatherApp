import { url, units, weather } from "./constants/api.js";
import { display } from "./display.js";

export function app(location) {
    async function getWeather() {
      try {
        const response = await fetch(`${url}/${location}?unitGroup=${units}&key=${weather}`)
        const json = response.json();
        console.log(json)
        return json
      }
      catch {
        throw new Error(error)
      }
    }

    getWeather().then(data => {
      display(data)
    })
    
}
