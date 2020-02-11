$(document).ready(function () {

    var api_key = "563492ad6f91700001000001181a6d6be1a748cbba8b2a899f7be7b1"
    var search
    var image = ''
    $("#form").submit(function (event) {
      event.preventDefault()

     search = $("#search").val()

     getPhoto()

  })

function getPhoto () {
  $.ajax({
    method: "GET",
    beforeSend: function (xhr){
      xhr.setRequestHeader("Authorization", api_key);
    },
    url: "https://api.pexels.com/v1/search?query=" + search + "&per_page=15&page=1",
    // isSecure: false,
    // Set-Cookie: key = value; HttpOnly; SameSite = strict
    success: function (data) {
      console.log(data);

      data.photos.forEach(photo => {
        image = `
     <img src="${photo.src.original}" width="400" height="300"/>
        `
        $("#images").append(image)

      })
    },
      error: function (error) {
        console.log(error);
      }
  })
}
})
