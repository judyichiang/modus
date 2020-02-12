class Quotes {
  constructor() {

    this.setIntervalID = null;

    this.handleGetQuoteSuccess = this.handleGetQuoteSuccess.bind(this);
    this.handleGetQuoteError = this.handleGetQuoteError.bind(this);
    this.initializeModal = this.initializeModal.bind(this);
    this.getQuotes = this.getQuotes.bind(this);
  }

handleGetQuoteSuccess(data) {
  // console.log(`"${data.quoteText}" - ${data.quoteAuthor}`);
  var quoteContent1 = document.querySelector('.quote-text');
  var quoteContent2 = document.querySelector('.quote-author');
  var qButton = document.querySelector('#quote-button');

  quoteContent1.textContent = `"${data.quoteText}"`;

  if (data.quoteAuthor.length === 0) {
    quoteContent2.textContent = "Unknown"
  }
  else {
    quoteContent2.textContent = `${data.quoteAuthor}`;
  }

  qButton.addEventListener("click", this.initializeModal)
}

initializeModal() {
  document.querySelector('#quote-modal').classList.remove('hidden');
  document.querySelector('#home-page').classList.add('hidden');
  this.setIntervalID = setInterval(this.getQuotes, 6000);

}

handleGetQuoteError(error) {
  console.log(error);
}

getQuotes() {
  $.ajax({
    url: "https://quote-garden.herokuapp.com/quotes/random",
    success: this.handleGetQuoteSuccess,
    error: this.handleGetQuoteError
  })
}

}
