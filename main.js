let photos = new Photos("dog");
var quotes = new Quotes();
var app = new App(quotes, photos);
var homePage = document.querySelector('#home-page');
var quoteModal = document.querySelector('#quote-modal');
const photoModal = document.getElementById("photo-modal");
const photoButton = document.getElementById("photo-button");
var returnButton1 = document.querySelector('.return-button');
var returnButton2 = document.querySelector('.return-button-2');

app.start();
createEventListeners();

function createEventListeners() {
  returnButton1.addEventListener("click", function () {
    homePage.classList.remove('hidden');
    photoModal.classList.add('hidden');
  });

  returnButton2.addEventListener("click", function () {
    homePage.classList.remove('hidden');
    quoteModal.classList.add('hidden');
    clearInterval(quotes.setIntervalID);
  });

  document.getElementById("location-button").addEventListener("click", function () {
    app.getZip(document.querySelector("#location-bar>label>input").value);
  });

  document.getElementById("recenter").addEventListener("click", function () {
    app.getLocation();
  });
}
