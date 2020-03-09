$(document).ready(function () {

    var christmasTopics = ["Reindeer", "Santa", "Fir Tree", "Snow", "Hot Chocolate", "Ornaments", "Carols", "Candy Canes",
        "Presents"]


    $("button").on("click", function () {
        var xmas = $(this).attr("data-xmas");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + reindeer
            + "&api_key=UbAY6SJJhOljEzSrIOAedTGTZperCmLZ&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);
                console.log(response.data.url[i].images);
                console.log(response.data.rating[i]);
            


                console.log("ready!");
            })
    })
});


// var santaPets = $("#slug").attr("src", response.data[0].images.fixed_height.url);

 // var results = response.data;
    // for(var i= 0; i< results.data.length; i++){
    //     var gifDiv = $('<div>');
    //     var rating = results[i].rating;
    //     var p = $("<p>").text("Rating:" + rating);