$(document).ready(function () {

    var christmasThings = ["Reindeer", "Santa", "Fir Tree", "Snow", "Hot Chocolate", "Ornaments", "Carols", "Candy Canes",
        "Presents"];

    // buttons for page


    function createButtons(arrayToUse, classToAdd, areaToAddTo) {
        $(areaToAddTo).empty();
        for (var i = 0; i < arrayToUse.length; i++) {
            var a = $("<button>");
            a.addClass(classToAdd);
            a.attr("data-type", arrayToUse[i]);
            a.text(arrayToUse[i]);
            $(areaToAddTo).append(a);
        }
    }

    //function that will populate images from Giphy API

    // $("button").on("click", function () {
    // var reindeer = $(".reindeer");
    // var xmas = $(this).attr("data-xmas");

    $(document).on("click", ".christmas-button", function () {
        $("#christmasThings").empty();
        (".christmas-button").removeClass("active");
        $(this).addClass("active");

        var type = $(this).attr("christmasThing  ");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type
            + "&api_key=UbAY6SJJhOljEzSrIOAedTGTZperCmLZ&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                var rudInfo = response.data;
                console.log(rudInfo);
                for (var i = 0; i < rudInfo.length; i++) {

                    var christmasThingsDiv = $("<div class=\"xmas-item\">");
                    // var img = $("<img/>")
                    // var rating = rudInfo[i].rating;
                    // var p = $("<p>").text("Rating: " + rating);

                    // console.log(rudInfo[i].images.downsized_large.url);
                    // img.attr("src", rudInfo[i].images.downsized_large.url);
                    // reindeer.append(img);
                    christmasThingsDiv.append(p);
                    // console.log(rudInfo[i].rating);
                    // rating.attr(rudInfo[i].rating);

                }

                var rating = rudInfofu[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var animated = results[i].images.fixed_height.url;
                var still = results[i].images.fixed_height_still.url;

                var santaImage = $("<img>");
                santaImage.attr("src", still);
                santaImage.attr("data-still", still);
                santaImage.attr("data-animate", animated);
                santaImage.attr("data-state", "still");
                santaImage.addClass("xmas-image");

                christmasThingsDiv.append(p);
                christmasThingsDiv.append(animalImage);

                $("#christmasThings").append(christmasThingsDiv);
            
            })
        });
});

$(document).on("click", ".add-helper", function () {

    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }
    else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});

$("#add-helper").on("click", function (event) {
    event.preventDefault();
    var santaThing = $("input").eq(0).val();

    if (santaThing.length > 2) {
        christmasThings.push(santaThing);
    }

    createButtons(christmasThings, "christmas-button", "#christmas-button");


    console.log("ready!");
});


