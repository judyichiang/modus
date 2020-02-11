class App {
    constructor () {
        this.getLocationSuccess = this.getLocationSuccess.bind(this);
        this.getLocationError = this.getLocationError.bind(this);
    };
    getLocation () {
        $.ajax ({
            method: "GET",
            url: "http://ip-api.com/json/",
            success: this.getLocationSuccess,
            error: this.getLocationError
        });
    };
    getLocationSuccess (data) {
        console.log(data);
    };
    getLocationError () {
        console.log(error);
    };
    start () {
        this.getLocation();
    }
 }