const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");
const locationButton = document.querySelector(".location-btn");
const currentWeatherDiv = document.querySelector(".current-weather");
const weatherCardsDiv = document.querySelector(".weather-cards");

const API_KEY = "7ac5b0fab4797b6d7993640487fc489a";

const createWeatherCard = (cityName, weatherItem, index) => {
    // generate weather card HTML
}

const getWeatherDetails = (cityName, latitude, longitude) => {
    const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    fetch(WEATHER_API_URL)
        .then(response => response.json())
        .then(data => {
            // process weather data and generate weather cards
        })
        .catch(error => console.error('Error:', error));
}

searchButton.addEventListener("click", () => {
    const cityName = cityInput.value.trim();
    if (cityName) {
        getWeatherDetails(cityName, null, null);
    }
});

locationButton.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        getWeatherDetails(null, latitude, longitude);
    });
});
 
