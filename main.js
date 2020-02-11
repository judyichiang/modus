var homePage = document.querySelector('#home-page');
var returnButton = document.querySelector('.return-button');
console.log(`Homepage: ${homePage}`)

var quotes = new Quotes();
var app = new App(quotes);
app.start();

// returnButton.addEventListener("click", function () {
//   homePage.classList.remove('hidden');
//   console.log(homePage)
// });
