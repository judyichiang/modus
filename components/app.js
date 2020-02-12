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
        console.log(this);
        document.querySelector("#location-bar>label>input").value = "";
    };
    getLocationError(error) {
        console.log(error);
        document.querySelector("#location-bar>label>input").value = "";
    };
    getZip (inputZip) {
        if (!/[\d]{5}/.test(inputZip)) {
            return alert("Please enter a valid 5 digit ZIP code.");
        } else {
            $.ajax ({
                url: "http://api.zippopotam.us/us/" + inputZip,
                success: this.getZipSuccess,
                error: this.getZipError
            });
        }
    };
    getZipSuccess (data) {
        this.userLocation = document.querySelector("#location-bar>label>input").value;
        this.inputZip = data.places[0];
        document.getElementById("location-display").textContent = this.inputZip["place name"] + ", " + this.inputZip["state abbreviation"];
        app.getWeather(this.userLocation);
        document.querySelector("#location-bar>label>input").value = "";
    };
    getZipError (error) {
        console.log(error);
        alert("Invalid ZIP code. Please try again.");
        document.querySelector("#location-bar>label>input").value = "";
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
        var weather = (this.currentWeather.weather[0].main).toLowerCase();
        var weatherIcon = this.currentWeather.weather[0].icon;
        document.getElementById("temp-fahrenheit").textContent = ((Number(temperature) - 273.15) * 9/5 + 32).toFixed(0);
        document.getElementById("temp-celsius").textContent = ((Number(temperature) - 273.15)).toFixed(0);
        while (document.querySelector("#weather-icon>img")) {
            document.querySelector("#weather-icon>img").remove();
        };
        var iconImg = document.createElement("img");
        iconImg.src = "http://openweathermap.org/img/wn/" + weatherIcon + ".png";
        document.getElementById("weather-icon").append(iconImg);

        function hideVideo () {
            var videoTags = document.querySelectorAll("video")
            for(var i = 0; i < videoTags.length; i++) {
                document.getElementsByClassName("background")[i].className = "background hidden";
            }
        };
        switch (weather) {
            case "clear":
                hideVideo();
                document.getElementsByClassName("background")[0].classList.remove("hidden")
                break;
            case "rain":
                hideVideo();
                document.getElementsByClassName("background")[1].classList.remove("hidden")
                break;
            case "thunderstorm":
                hideVideo();
                document.getElementsByClassName("background")[2].classList.remove("hidden")
                break;
            case "snow":
                hideVideo();
                document.getElementsByClassName("background")[3].classList.remove("hidden")
                break;
            case "clouds":
                hideVideo();
                if (data.weather[0].id == 801 || data.weather[0].id == 802) {
                    document.getElementsByClassName("background")[0].classList.remove("hidden")
                } else {
                    document.getElementsByClassName("background")[5].classList.remove("hidden")
                }
                break;
            default:
                hideVideo();
                document.getElementsByClassName("background")[4].classList.remove("hidden")
        }
    }
    getWeatherError(error) {
        console.log(error);
    }

    start() {
        this.getLocation();
        this.quotes.getQuotes();
        document.getElementById("photo-button").addEventListener("click", this.photos.initializeModal);
    };
}
