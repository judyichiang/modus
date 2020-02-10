class Quotes {
  constructor() {

    this.handleGetQuoteSuccess.bind(this);
    this.handleGetQuoteError.bind(this);
  }

  handleGetQuoteSuccess(data) {
    console.log("working: ", data);
  }

  handleGetQuoteError(error) {
    console.log("not working :(");
  }

  getQuotes() {
    $.ajax({
      url: "https://quote-garden.herokuapp.com/quotes/random",
      success: this.handleGetQuoteSuccess,
      error: this.handleGetQuoteError
    })
  }


}
