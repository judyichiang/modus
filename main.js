let photos = new Photos();
var quotes = new Quotes();
var app = new App(quotes, photos);
app.start();

var homePage = document.querySelector('#home-page');
var quoteModal = document.querySelector('#quote-modal');
const photoModal = document.getElementById("photo-modal");
const photoButton = document.getElementById("photo-button");
var returnButton1 = document.querySelector('.return-button');
var returnButton2 = document.querySelector('.return-button-2');

// photo modal
returnButton1.addEventListener("click", function () {
  homePage.classList.remove('hidden');
  photoModal.classList.add('hidden');
});

//quote modal
returnButton2.addEventListener("click", function () {
  homePage.classList.remove('hidden');
  quoteModal.classList.add('hidden');
  clearInterval(quotes.setIntervalID);
});
