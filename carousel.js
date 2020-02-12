$(document).ready(function () {

    var api_key = "563492ad6f91700001000001181a6d6be1a748cbba8b2a899f7be7b1"

    var search = "storm";


    var image = [];

    var selectedPhotos = [];
    getPhoto()



    $("#form").submit(function (event) {
      event.preventDefault()

     search = $("#search").val()


  })

function getPhoto () {
  $.ajax({
    method: "GET",
    beforeSend: function (xhr){
      xhr.setRequestHeader("Authorization", api_key);
    },
    url: "https://api.pexels.com/v1/search?query=" + search + "&per_page=80&page=1",
    success: function (data) {
      console.log(data);

     var counter = 0;
     while (counter < 4) {
       var randomIndex = Math.floor(Math.random()*(data.photos.length));
       if (!selectedPhotos.includes(data.photos[randomIndex])){
         selectedPhotos.push(data.photos[randomIndex]);
         counter++;
       }
     }
        console.log("final selected photos",selectedPhotos);

       $(".d-block").each(function (i) {
        this.src = selectedPhotos[i].src.large;
        console.log("this.source", this.src);

      });


    },
      error: function (error) {
        console.log(error);
      }
  })
}
})
