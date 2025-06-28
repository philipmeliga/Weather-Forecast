
const cityInput = document.getElementById('city');
const searchBtn = document.getElementById('search-btn');
const weatherData = document.getElementById('weather-data');


const apiKey = '7ac5b0fab4797b6d7993640487fc489a'; 
- 
searchBtn.addEventListener('click', fetchWeatherData() );

function fetchWeatherData() {
    const city = cityInput.value.trim();
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => displayWeatherData(data))
    .catch(error => console.error('Error:', error));

function displayWeatherData(data) {
    const { name, main, weather, wind } = data;
    const weatherHtml = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Wind Speed: ${wind.speed} m/s</p>
        <p>Weather: ${weather[0].description}</p>
    `;
    weatherData.innerHTML = weatherHtml;
}
