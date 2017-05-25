console.log("hello")

$('li a').click(function(){
	console.log("button clicked")
 	if (!$(this).hasClass("is-active")) {
  		$("li.is-active ").removeClass("is-active");
  		$(this).parent().addClass("is-active");
  		console.log($(this))
 	}
});

$('.speakers-button').click(function(e) {
});

$('.films-button').click(function(e) {
});

$('.concerts-button').click(function(e) {
});
