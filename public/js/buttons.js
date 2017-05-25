
var speakersfilter = false;
var filmsfilter = false;
var concertsfilter = false;

$('li a').click(function(){
 	if (!$(this).hasClass("is-active")) {
  		$("li.is-active ").removeClass("is-active");
  		$(this).parent().addClass("is-active");
 	}
});


$('.speakers-button').click(function(e) {
	console.log(speakersfilter);
	speakersfilter = !speakersfilter;
	filmsfilter = false;
	concertsfilter = false;
	console.log(speakersfilter);
if(speakersfilter == true){
		console.log("made it")
		$(".films").css("opacity", "0.2");
		$(".concerts").css("opacity", "0.2");
	}
	else{
		$(".films").css("opacity", "1");
		$(".concerts").css("opacity", "1");
	}
});

$('.films-button').click(function(e) {
	speakersfilter = false;
	filmsfilter = !filmsfilter;
	concertsfilter = false;

	if(filmsfilter == true){
		$(".speakers").css("opacity", "0.2");
		$(".concerts").css("opacity", "0.2");
	}
	else{
		$(".speakers").css("opacity", "1");
		$(".concerts").css("opacity", "1");
	}
});

$('.concerts-button').click(function(e) {
	speakersfilter = false;
	filmsfilter = false;
	concertsfilter = !concertsfilter;

	if(concertsfilter == true){
		$(".films").css("opacity", "0.2");
		$(".speakers").css("opacity", "0.2");
	}
	else{
		$(".films").css("opacity", "1");
		$(".speakers").css("opacity", "1");
	}
});
