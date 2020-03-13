$(document).ready(function () {

    var christmasTopics = ["Reindeer", "Santa", "Fir Tree", "Snow", "Hot Chocolate", "Ornaments", "Carols", "Candy Canes",
        "Presents"]

    // var santasHelpers= "reindeer";
    $("button").on("click", function () {
        var reindeer = $(".reindeer");
        var reinRat= $(".reindeer")
        var xmas = $(this).attr("data-xmas");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + "reindeer"
            + "&api_key=UbAY6SJJhOljEzSrIOAedTGTZperCmLZ&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                var rudInfo = response.data;
                console.log(rudInfo);
                for (var i = 0; i < rudInfo.length; i++) {
                    var petsImg = $("<img/>");
                    console.log(rudInfo[i].images.downsized_large.url);
                    petsImg.attr("src", rudInfo[i].images.downsized_large.url);
                    reindeer.append(img);
                    console.log(rudInfo[i].rating);
                    img
                    
                    // console.log(response.data.type);
                    // console.log(response.data.url.images);
                    // console.log(response.data.rating[i]);
                }



                console.log("ready!");
            })
    })
});

/*
{
    prop:value
}

[0,1,2,3,4]

    data = [
        {},
        {}, <-rudolph
        {},
        {},
        {}
    ]

*/


// var santaPets = $("#slug").attr("src", response.data[0].images.fixed_height.url);

 // var results = response.data;
    // for(var i= 0; i< results.data.length; i++){
    //     var gifDiv = $('<div>');
    //     var rating = results[i].rating;
    //     var p = $("<p>").text("Rating:" + rating);