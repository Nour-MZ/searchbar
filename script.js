
$(".search-icon").on( "click", function() {
    $("#search-container").toggleClass("show");
    $("#search-modal").toggleClass("show")
  } );

$(".search-close-btn, #search-modal").on( "click", function() {
    $(".search-icon").trigger("click")
})

