import { API_KEY_IMG, imgUrl } from "./constants/api";
import backImg from "../imgs/back.jpg";
// https://api.unsplash.com/search/photos/?query=${keywords}&client_id=${ACCESS_KEY}

export function getImg(img) {
  async function getApiImg() {
    const options = {
      headers: {
        'Accept-Version': 'v1',
        'Authorization': `Client-ID ${API_KEY_IMG}`
      }
    }
    try {
      const response = await fetch(`${imgUrl}?query=${img}&client_id=${API_KEY_IMG}`, options);
      const json = response.json();
      return json;
    }
    catch {
      throw new Error(error);
    }
  }

  getApiImg().then(data => {
    console.log(data)
    if (data.results && data.results.length !== 0) {
      document.body.style.background = `url("${data.results[0].urls.full}") no-repeat 100% 68% /cover`;
    } else {
      document.body.style.background = `url("${backImg}") no-repeat 50% 50%`;
      document.body.style.backgroundSize = `cover`;
    }
  })
}