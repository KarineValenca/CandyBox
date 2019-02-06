var candyButtons = document.querySelectorAll(".brigadeiro");
var sizeButtons = document.querySelectorAll('.size');
var flavourButtons = document.querySelectorAll('.flavour');
var boxStyleButtons = document.querySelectorAll('.box-style');
var step1 = document.querySelector(".step1");
var step2 = document.querySelector(".step2");
var step3 = document.querySelector(".step3");
var step4 = document.querySelector(".step4");
var step5 = document.querySelector(".step5");

for(var i = 0; i < candyButtons.length; i++) {
	candyButtons[i].addEventListener("click", function(){
		step1.style.display = "none";
		step2.style.display = "block";
	});
}

for(var i = 0; i < sizeButtons.length; i++) {
	sizeButtons[i].addEventListener("click", function(){
		step2.style.display = "none";
		step3.style.display = "block";
	});
}

for(var i = 0; i < flavourButtons.length; i++) {
	flavourButtons[i].addEventListener("click", function(){
		step3.style.display = "none";
		step4.style.display = "block";
	});
}

for(var i = 0; i < boxStyleButtons.length; i++) {
	boxStyleButtons[i].addEventListener("click", function(){
		step4.style.display = "none";
		step5.style.display = "block";
	});
}