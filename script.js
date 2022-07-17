var css    = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body   = document.getElementById("linear");
var button = document.querySelector("button");


body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
css.textContent = body.style.background + ";";


function setGradient() {
	body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";";
}


function setRandom() {
	var random1 = Math.floor(Math.random()*16777215).toString(16);
	var random2 = Math.floor(Math.random()*16777215).toString(16);

	console.log(Math.floor(Math.random()*16777215).toString(16));
	color1.value = "#" + random1;
	color2.value = "#" + random2;
	
	body.style.background = "linear-gradient(to right, #" + random1 + ", #" + random2 + ")";
	css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandom);
