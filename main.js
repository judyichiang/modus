
var quotes = new Quotes();
var app = new App(quotes);
app.start();

var homePage = document.querySelector('#home-page');
var quoteModal = document.querySelector('#quote-modal');
var returnButton1 = document.querySelector('.return-button-1');
var returnButton2 = document.querySelector('.return-button-2');
console.log(homePage)
console.log(returnButton1);

returnButton1.addEventListener("click", function () {
  homePage.classList.remove('hidden');
  quoteModal.classList.add('hidden');
  var quoteModal = document.querySelector('#quote-modal');
  console.log("return clicked")
});

returnButton2.addEventListener("click", function () {
  homePage.classList.remove('hidden');
  quoteModal.classList.add('hidden');
  console.log("return clicked")
});
