var infoList = [];//where the button info gets stored
window.onload = function() {


$("#getInfo").click(function(event){//creates the button from the input from the text field
   event.preventDefault();
   var entry = $("#buttonInfo").val();
   infoList.push(entry);
   renderButtons();
   $("#buttonInfo").val("");

$(".findGiphy").click(function(event){//searches the api using the clicked button value
	   event.preventDefault();
	   $("#giphyFun").empty();
      var search = $(this).val();
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        search + "&api_key=dc6zaTOxFJmzC&limit=10";
        console.log(search);
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {//adds the images to the page from the api
         var results = response.data;
         for (var i = 0; i < results.length; i++) {
          var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var searchImage = $("<img>");
            searchImage.attr("src", results[i].images.fixed_height.url);
            searchImage.attr("alt", "search image");
            $("#giphyFun").prepend(p);
            $("#giphyFun").prepend(searchImage);
          }
        });

    });
 });

      // Calling the renderButtons function at least once to display the list of buttons searched for.
      renderButtons();

}

 function renderButtons() {//renders the buttons to the page

        $("#btnHome").empty();
        for (var i = 0; i < infoList.length; i++) {
          var a = $("<button>");
          a.addClass("findGiphy");
          a.val(infoList[i]);
          a.text(infoList[i]);
          $("#btnHome").append(a);
        }
      }