class App {
    constructor (quotes) {
        this.getLocationSuccess = this.getLocationSuccess.bind(this);
        this.getLocationError = this.getLocationError.bind(this);
        this.getWeatherSuccess = this.getWeatherSuccess.bind(this);
        this.getWeatherError = this.getWeatherError.bind(this);
        this.quotes = quotes;
        this.userLocation = null;
        this.currentWeather = null;
    };
    getLocation () {
        $.ajax ({
            url: "http://ip-api.com/json/",
            success: this.getLocationSuccess,
            error: this.getLocationError
        });
    };
    getLocationSuccess (data) {
        this.userLocation = data;
        this.getWeather(this.userLocation.city);
    };
    getLocationError (error) {
        console.log(error);
    };
    getWeather (userLocation) {
        $.ajax ({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + userLocation + "&appid=0b810be14937d73254c214a19e48465c",
            success: this.getWeatherSuccess,
            error: this.getWeatherError
        });
    };
    getWeatherSuccess (data) {
        this.currentWeather = data;
        var city = this.userLocation.city;
        var state = this.userLocation.region;
        var temperature = this.currentWeather.main.temp;
        var weatherIcon = this.currentWeather.weather[0].icon;
        document.querySelector("#location-display").textContent = city + ", " + state;
        document.getElementById("temp-fahrenheit").textContent = ((Number(temperature) - 273.15) * 9/5 + 32).toFixed(0);
        document.getElementById("temp-celsius").textContent = ((Number(temperature) - 273.15)).toFixed(2);
        var iconImg = document.createElement("img")
        iconImg.src = "http://openweathermap.org/img/wn/" + weatherIcon + ".png";
        document.getElementById("weather-icon").append(iconImg);
    };
    getWeatherError (error) {
        console.log(error);
    };
    start () {
        this.getLocation();
    };
 };