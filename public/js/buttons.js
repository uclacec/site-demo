console.log("hello")
/*
$('li a').click(function(){
	console.log("button clicked")
 	if (!$(this).hasClass("is-active") || ) {
        $("isactive").addClass("inactive");
  		$("isactive").removeClass("isactive");
  		$(this).parent().addClass("is-active");
  		console.log($(this))
 	}
});
*/
$('.speakers-button').click(function(e) {
    $(".isactive").removeClass("isactive");
    $(".s").removeClass("inactive");
    $(".fi").addClass("inactive");
    $(".c").addClass("inactive");
    $(".s").addClass("isactive");
});

$('.films-button').click(function(e) {
    $(".isactive").removeClass("isactive");
    $(".fi").removeClass("inactive");
    $(".s").addClass("inactive");
    $(".c").addClass("inactive");
    $(".fi").addClass("isactive");
});

$('.concerts-button').click(function(e) {
    $(".isactive").removeClass("isactive");
    $(".c").removeClass("inactive");
    $(".fi").addClass("inactive");
    $(".s").addClass("inactive");
    $(".c").addClass("isactive");
});
