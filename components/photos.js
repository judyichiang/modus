class Photos {
  constructor(query) {
    this.handleGetPhotoSuccess = this.handleGetPhotoSuccess.bind(this);
    this.handleGetPhotoError = this.handleGetPhotoError.bind(this);
    this.initializeModal = this.initializeModal.bind(this);
    this.query = null;
  }

  getPhotos() {
    $.ajax({
      method: "GET",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "563492ad6f91700001000001181a6d6be1a748cbba8b2a899f7be7b1");
      },
      url: "https://api.pexels.com/v1/search?query=" + this.query + "&per_page=80&page=1",
      success: this.handleGetPhotoSuccess,
      error: this.handleGetPhotoError,
    });
  }

  handleGetPhotoSuccess(data) {
    console.log(data);
    const selectedPhotos = [];
    console.log("query", this.query);

    let counter = 0;
    if (data.photos.length > 3) {
      while (counter < 4) {
        const randomIndex = Math.floor(Math.random() * (data.photos.length));
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
    console.log("success")
  }

  handleGetPhotoError(error) {
    console.log(error);
  }

  initializeModal() {
    this.getPhotos();
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('photo-modal').classList.remove('hidden');
  }
}
