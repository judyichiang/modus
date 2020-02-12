class App {
    constructor(quotes, photos) {
        this.getLocationSuccess = this.getLocationSuccess.bind(this);
        this.getLocationError = this.getLocationError.bind(this);
        this.getWeatherSuccess = this.getWeatherSuccess.bind(this);
        this.getWeatherError = this.getWeatherError.bind(this);
        this.getZipSuccess = this.getZipSuccess.bind(this);
        this.getZipError = this.getZipError.bind(this);
        this.quotes = quotes;
        this.photos = photos;
        this.setIntervalID = null;
        this.userLocation = null;
        this.currentWeather = null;
        this.inputZip = null;
    };
    getLocation(data) {
        $.ajax({
            url: "http://ip-api.com/json/",
            success: this.getLocationSuccess,
            error: this.getLocationError
        });
    };
    getLocationSuccess(data) {
        this.userLocation = data;
        var city = this.userLocation.city;
        var state = this.userLocation.region;
        document.querySelector("#location-display").textContent = city + ", " + state;
        this.getWeather(this.userLocation.zip);
        document.getElementById("location-button").addEventListener("click", function () {
            app.getZip(document.querySelector("#location-bar>label>input").value);
        });
    };
    getLocationError(error) {
        console.log(error);
    };
    getZip (inputZip) {
        if(inputZip === "" || inputZip.length !== 5) {
            return alert("Please input accurate Zip Code to submit");
        };
        $.ajax ({
            url: "http://api.zippopotam.us/us/" + inputZip,
            success: this.getZipSuccess,
            error: this.getZipError
        });
    };
    getZipSuccess (data) {
        this.userLocation = document.querySelector("#location-bar>label>input").value;
        this.inputZip = data.places[0];
        document.getElementById("location-display").textContent = this.inputZip["place name"] + ", " + this.inputZip["state abbreviation"];
        app.getWeather(this.userLocation);
    };
    getZipError (error) {
        console.log(error);
    }
    getWeather(userLocation) {
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + userLocation + ",us&appid=0b810be14937d73254c214a19e48465c",
            success: this.getWeatherSuccess,
            error: this.getWeatherError
        });
    };
    getWeatherSuccess(data) {
        this.currentWeather = data;
        var temperature = this.currentWeather.main.temp;
        var weatherIcon = this.currentWeather.weather[0].icon;
        document.getElementById("temp-fahrenheit").textContent = ((Number(temperature) - 273.15) * 9/5 + 32).toFixed(0);
        document.getElementById("temp-celsius").textContent = ((Number(temperature) - 273.15)).toFixed(0);
        while (document.querySelector("#weather-icon>img")) {
            document.querySelector("#weather-icon>img").remove();
        };
        var iconImg = document.createElement("img")
        iconImg.src = "http://openweathermap.org/img/wn/" + weatherIcon + ".png";
        document.getElementById("weather-icon").append(iconImg);
    }
    getWeatherError(error) {
        console.log(error);
    }

    start() {
        this.getLocation();
        this.quotes.getQuotes();
        document.getElementById("photo-button").addEventListener("click", this.photos.initializeModal);
        setInterval(function () {
            this.quotes.getQuotes()
        }, 6000);
    };
}
