const city_search = document.getElementById("city-search");
const submit_city = document.getElementById("submit-city");
const city_name = document.getElementById("city-name");
const fajar_time = document.getElementById("fajar-time");
const sunrise_time = document.getElementById("sunrise-time");
const dhuhr_time = document.getElementById("dhuhr-time");
const asr_time = document.getElementById("asr-time");
const maghrib_time = document.getElementById("maghrib-time");
const isha_time = document.getElementById("isha-time");

let currentDate = new Date();

async function checkName(city) {
    const url = `https://api.aladhan.com/v1/timingsByAddress/${currentDate}?address=${city}`;
    const city_data = fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Display city name
            city_name.textContent = data.data.meta.timezone;
            // Display prayer times
            fajar_time.textContent = data.data.timings.Fajr;
            sunrise_time.textContent = data.data.timings.Sunrise;
            dhuhr_time.textContent = data.data.timings.Dhuhr;
            asr_time.textContent = data.data.timings.Asr;
            maghrib_time.textContent = data.data.timings.Maghrib;
            isha_time.textContent = data.data.timings.Isha;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

submit_city.addEventListener('click', () => {
    checkName(city_search.value);
});