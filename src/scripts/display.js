const temp = document.querySelector(".city__info-temp");
const city = document.querySelector('.city');
const date = document.querySelector('.date');
const dateNow = new Date();

const options = {
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  hour: 'numeric',
  minute: 'numeric',
};

export function display (data) {
  const address = data.resolvedAddress.split(',');
  city.innerText = address[0];
  temp.innerText = Math.round(data.days[0].temp ) + "°";
  
  setInterval(function() {
    date.innerText = dateNow.toLocaleString("ru", options)
  }, 1000)
}
