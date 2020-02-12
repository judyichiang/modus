class Photos {
  constructor() {
    // this.api_key = "563492ad6f91700001000001181a6d6be1a748cbba8b2a899f7be7b1"
    // this.search = "panda";
    this.handleGetPhotoSuccess = this.handleGetPhotoSuccess.bind(this);
    this.handleGetPhotoError = this.handleGetPhotoError.bind(this);
    this.initializeModal = this.initializeModal.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
  }

  handleGetPhotoSuccess(data) {
    console.log(data);
    let selectedPhotos = [];

    var counter = 0;
    while (counter < 4) {
      var randomIndex = Math.floor(Math.random() * (data.photos.length));
      if (!selectedPhotos.includes(data.photos[randomIndex])) {
        selectedPhotos.push(data.photos[randomIndex]);
        counter++;
      }
    }
    console.log("final selected photos", selectedPhotos);

    $(".d-block").each(function (i) {
      this.src = selectedPhotos[i].src.large;
      console.log("this.source", this.src);
    })
}

    // console.log(`"${data.quoteText}" - ${data.quoteAuthor}`);
    // var quoteContent1 = document.querySelector('.quote-text');
    // var quoteContent2 = document.querySelector('.quote-author');
    // var qButton = document.querySelector('#quote-button');

    // quoteContent1.textContent = `"${data.quoteText}"`;
    // quoteContent2.textContent = `- ${data.quoteAuthor}`;

    // if (data.quoteAuthor.length === 0) {
    //   quoteContent2.textContent = "Unknown"
    // }
    // else {
    //   quoteContent2.textContent = `${data.quoteAuthor}`;
    // }

  //   qButton.addEventListener("click", this.initializeModal)
  // }


  handleGetPhotoError(error) {
    console.log(error);
  }

  initializeModal() {
    console.log("photo button clicked");
    const homePage = document.getElementById('home-page');
    const photoModal = document.getElementById('photo-modal');
    photoModal.classList.remove('hidden');
    homePage.classList.add('hidden');
    console.log("this", this);
    this.getPhotos;
  }

  getPhotos() {
    $.ajax({
      method: "GET",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "563492ad6f91700001000001181a6d6be1a748cbba8b2a899f7be7b1");
      },
      url: "https://api.pexels.com/v1/search?query=" + "beach" + "&per_page=80&page=1",
      success: this.handleGetPhotoSuccess,
      error: this.handleGetPhotoError,
    });
}
}
