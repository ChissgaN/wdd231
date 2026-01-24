const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.querySelector('#forecast');

const apiKey = '44b87d1411406ee4957748c0d2847b36';
const lat = 14.84;
const lon = -91.52;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log('Current Weather:', data);
      displayCurrentWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayCurrentWeather(data) {
  currentTemp.textContent = data.main.temp.toFixed(1);

  const icon = data.weather[0].icon;
  const desc = data.weather[0].description;
  const iconsrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}

async function fetchForecast() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      console.log('Forecast:', data);
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayForecast(data) {
  forecastContainer.innerHTML = '';

  const forecastList = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0,3);

  forecastList.forEach(day => {
    const date = new Date(day.dt_txt);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
    const temp = day.main.temp.toFixed(1);
    const icon = day.weather[0].icon;
    const desc = day.weather[0].description;
    const iconsrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    const forecastItem = document.createElement('div');
    forecastItem.classList.add('forecast-item');
    forecastItem.innerHTML = `
      <p><strong>${dayName}</strong></p>
      <img src="${iconsrc}" alt="${desc}">
      <p>${temp}°F</p>
      <p>${desc}</p>
    `;

    forecastContainer.appendChild(forecastItem);
  });
}

apiFetch();
fetchForecast();