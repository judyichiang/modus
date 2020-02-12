$(document).ready(function () {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://bestapi-ted-v1.p.rapidapi.com/transcriptFreeText?size=3&text=amazing%20talk",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "bestapi-ted-v1.p.rapidapi.com",
      "x-rapidapi-key": "d17dcad7a9mshc4193db933fe816p12536cjsnb11be33b2ab2"
    }
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
  });

})
