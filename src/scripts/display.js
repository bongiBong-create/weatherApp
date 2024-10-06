const temp = document.querySelector(".city__info-temp");
const city = document.querySelector('.city');
const date = document.querySelector('.date');

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
  
  getDate()
}

function getDate () {
  const nowDate = new Date()
  
  setInterval(function (){
    date.innerText = nowDate.toLocaleString("ru", options)
  }, 1000)

}