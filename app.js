const city_search = document.getElementById("city-search");
const submit_city = document.getElementById("submit-city");
const city_name = document.getElementById("city-name");
const fajar_time = document.getElementById("fajar-time");
const sunrise_time = document.getElementById("submit-city");
const dhuhr_time = document.getElementById("submit-city");
const asr_time = document.getElementById("submit-city");
const maghrib_time = document.getElementById("submit-city");
const isha_time = document.getElementById("submit-city");

let currentDate = new Date();

async function checkName(city) {
  const url = `https://api.aladhan.com/v1/timingsByAddress/${currentDate}?address=${city_search}`;
  const city_data = await fetch(url).then((response) => response.json());
}

submit_city.addEventListener(`click`, () => {
  checkName(city_search.value);
});
