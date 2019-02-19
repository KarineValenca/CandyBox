var candyButtons = document.querySelectorAll(".brigadeiro");
var sizeButtons = document.querySelectorAll('.size');
var flavourButtons = document.querySelectorAll('.flavour');
var boxStyleButtons = document.querySelectorAll('.box-style');
var step1 = document.querySelector(".step1");
var step2 = document.querySelector(".step2");
var step3 = document.querySelector(".step3");
var step4 = document.querySelector(".step4");
var step5 = document.querySelector(".step5");
var step6 = document.querySelector(".step6");
var boxSizeText = document.querySelector("#boxSize");
var flavours = document.querySelector("#flavours");
var boxSize = "";
var submit = document.querySelector("#submit");

for(var i = 0; i < candyButtons.length; i++) {
	candyButtons[i].addEventListener("click", function(){
		step1.style.display = "none";
		step2.style.display = "block";
	});
}

for(var i = 0; i < sizeButtons.length; i++) {
	sizeButtons[i].addEventListener("click", function(){
		boxSize = this.textContent;
		boxSizeText.textContent = boxSize;
		step2.style.display = "none";
		step3.style.display = "block";
		selectCandyFlavours(boxSize);
	});
}


for(var i = 0; i < boxStyleButtons.length; i++) {
	boxStyleButtons[i].addEventListener("click", function(){
		step4.style.display = "none";
		step5.style.display = "block";
	});
}

function selectCandyFlavours(quantity){
	for(var i = 0; i < flavourButtons.length; i++) {
		var count = 0;
		flavourButtons[i].addEventListener("click", function(){
			count += 1;
			flavours.textContent += " " + this.textContent + " ";
			if (count >= quantity){
				step3.style.display = "none";
				step4.style.display = "block";
			}
		});
	}
}

submit.addEventListener("click", function(){
	step5.style.display = "none";
	step6.style.display = "block";
})