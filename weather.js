const cityInput = document.getElementById('city');
const getWeatherButton = document.getElementById('get-weather');
const weatherDataContainer = document.getElementById('weather-data');
const apiKey = '7ac5b0fab4797b6d7993640487fc489a';

getWeatherButton.addEventListener('click', getWeather);

function getWeather() {
    const city = cityInput.value.trim();
    if (city !== '') {
        const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key};                                                                                 
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod === '404') {
                    weatherDataContainer.innerHTML = 'City not found';
                } else {
                    const weatherData = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod === '404') {
                    weatherDataContainer.innerHTML = 'City not found';
                } else {
                    const weatherData = ``https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
                        <h2>Weather in ${data.name}</h2>
                        <p>Temperature: ${data.main.temp}°C</p>
                        <p>Humidity: ${data.main.humidity}%</p>
                        <p>Weather: ${data.weather[0].description}</p>
                    `;
                    weatherDataContainer.innerHTML = weatherData;
                }
            })
            .catch(error => console.error('Error:', error));
    } else {
        weatherDataContainer.innerHTML = 'Please enter a city name';
    }
}
