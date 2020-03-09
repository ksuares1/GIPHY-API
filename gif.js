$(document).ready(function () {

 var christmasTopics=["Reindeer", "Santa", "Fir Tree", "Snow", "Hot Chocolate", "Ornaments", "Carols", "Candy Canes",
  "Presents"] 

//   First Christmas Animal 

   var santaAnimal = "Reindeer";

    $("button").on("click", function() {
    var xmas = $(this).attr("data-xmas");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 'reindeer'
    + "&api_key=UbAY6SJJhOljEzSrIOAedTGTZperCmLZ&limit=10";
  
    $.ajax({
    url: queryURL,
    method: "GET"
    })
    .then(function(response) {
    console.log(queryURL);
    console.log(response);



    console.log("ready!");
    })
    })
});
