class Quotes {
  constructor(quoteModal) {

    this.quoteModal = quoteModal;

    this.handleGetQuoteSuccess.bind(this);
    this.handleGetQuoteError.bind(this);
  }

  handleGetQuoteSuccess(data) {
    console.log(`"${data.quoteText}" - ${data.quoteAuthor}`);

    var quoteContent = document.querySelector('.quote-text');
    var qButton = document.querySelector('#quote-button');

    console.log(quoteContent);
    quoteContent.textContent = `"${data.quoteText}" - ${data.quoteAuthor}`;



    qButton.addEventListener("click", function () {
      console.log("click quote button")
    })

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
