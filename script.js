$("#search-icon").addClass("show");

$(".search-icon").on( "click", function() {
    $("#search-container").toggleClass("show");
    $("#search-modal").toggleClass("show")
    console.log("goos")
  } );

$(".search-close-btn").on( "click", function() {
    $("#search-container").removeClass("show");
    $("#search-modal").removeClass("show")
})

$("#search-modal").on( "click", function() {
    $("#search-container").removeClass("show");
    $("#search-modal").removeClass("show")
})
