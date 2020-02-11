class Quotes {
  constructor() {

    this.handleGetQuoteSuccess.bind(this);
    this.handleGetQuoteError.bind(this);
  }

  handleGetQuoteSuccess(data) {
    // console.log(`"${data.quoteText}" - ${data.quoteAuthor}`);
    var homePage = document.querySelector('#home-page')
    var quoteModal = document.querySelector('#quote-modal');
    var quoteContent1 = document.querySelector('.quote-text');
    var quoteContent2 = document.querySelector('.quote-author');
    var qButton = document.querySelector('#quote-button');

    quoteContent1.textContent = `"${data.quoteText}"`;
    quoteContent2.textContent = `- ${data.quoteAuthor}`;


    qButton.addEventListener("click", function () {
      console.log("click quote button")
      quoteModal.classList.remove('hidden');
      homePage.classList.add('hidden');

      console.log(quoteModal);
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
