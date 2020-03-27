$(document).ready(function () {

    var christmasThings = ["Reindeer", "Santa", "Fir Tree", "Snow", "Hot Chocolate", "Ornaments", "Elf", "Candy Canes",
        "Presents", "Advent", "Christmas Pajamas"];

    // buttons for page
    $(".santa").on("click", function () {
        console.log("santa");
        // $(areaToAddTo).empty();
        for (var i = 0; i < christmasThings.length; i++) {
            var a = $("<button>");
            a.addClass("xmas");
            a.attr("data-type", christmasThings[i]);
            a.text(christmasThings[i]);
            $(".christmas-buttons").append(a);
        }
    })

    $(document).on("click", ".xmas", function () {
        var type = $(this).attr("data-type");
        console.log(type);
        $("#christmasThings").empty();
        // (".christmas-buttons").removeClass("active");
        $(this).addClass("active");

        var type = $(this).attr("data-type");
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
                    var santaImage = $("<img>");
                    santaImage.addClass("santaImage");
                    var animated = rudInfo[i].images.fixed_height.url;
                    santaImage.attr("data-animate", animated);
                    var still = rudInfo[i].images.fixed_height_still.url;
                    santaImage.attr("src", still);
                    santaImage.attr("data-state", "still");
                    var rating = rudInfo[i].rating;
                    var p = $("<p>").text("Rating: " + rating);
                    $("#christmasThings").append(santaImage, p);
                }
            })
    });

    $(document).on("click", ".santaImage", function () {

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
        console.log("time");
        event.preventDefault();
        var santaThing = $("input").eq(0).val();
        var a = $("<button>");
        a.addClass("xmas");
        a.attr("data-type", santaThing);
        a.text(santaThing);
        $(".christmas-buttons").append(a);
        // console.log(santaThing);
        // if (santaThing.length > 2) {
        //     christmasThings.push(santaThing);
        //     console.log("thing");
        // }

        (christmasThings, "christmas-button", ".christmas-buttons");


        console.log("ready!");
    });

    (christmasThings, "christmas-button", ".christmas-buttons");

});


