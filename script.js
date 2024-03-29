const content = document.querySelector('.content');

async function getWeather(location) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=bf94dc35f08c4ea79a6223324242603&q=${location}`, {
    mode: 'cors'
  })
  const weatherData = await response.json();
  console.log(weatherData);
  processWeatherData(weatherData);
}

function processWeatherData (weatherData) {
    const tempInF = weatherData.current.temp_f;
    const conditionText = weatherData.current.condition.text;
    console.log(tempInF);
    console.log(conditionText);
    displayWeatherData(tempInF, conditionText);
}

function displayWeatherData (tempinF, conditionText) {
    const showTemp = document.createElement('div');
    showTemp.textContent = `${tempinF} degrees Farenheit`;
    content.appendChild(showTemp);
    const showCond = document.createElement('div');
    showCond.textContent = `${conditionText}`;
    content.appendChild(showCond);
}


const submitBtn = document.querySelector('#submit');

const locationInput = submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const input = document.querySelector('#location').value;
    const city = document.querySelector('#city');
    city.textContent = input;
    content.textContent = '';
    getWeather(input);
})

