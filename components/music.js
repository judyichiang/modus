class Music {
  constructor() {
    this.handleGetMusicSuccess.bind(this);
    this.handleGetMusicError.bind(this);
  }

  handleGetMusicSuccess(song) {
    console.log(`Success: ${song}`);
  }

  handleGetMusicError(error) {
    console.log(`Error: ${error}`);
  }

  getMusic() {
    $.ajax({
      method: "Get",
      url: "http://ws.audioscrobbler.com/2.0/",
      headers : {
        "api_key": "12af1c6d160328c091313c3b8542cce4"
      },
      success: this.handleGetMusicSuccess,
      error: this.handleGetMusicError
    })
  }
}
