var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";


	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// 1. Write code so that the colour inputs match the 
// background generated on the first page load. 
var c1 = "#ff0000";
var c2 = "#00ff00";
color1.value = c1;
color2.value = c2;

// 2. Display the initial CSS linear gradient property on page load.
setGradient();

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.

// establish JS selector
var butt = document.querySelector("button");
// add event listener for button
butt.addEventListener("click",setRandoColors);

// function to generate random number OR letter needed for hexadecimal
function random() {
	var x = Math.floor((Math.random() * 16) + 0); // random number generator 	
	if(x>9){ // numbers higher than 15 are changed to letters, as needed for a hexadecimal
		var lett = ["a","b","c","d","e","f"]; 
		x = lett[x-10];
	}
	return x;
}

// use random number/ letter to make hexadecimal value
function makeHex(){
	var hax = ''; // define variable to collect values to be used as hexadecimal
	for (var y = 0;y<6;y++){ // there are 6 values in a hexadecimal, so loop 6 times
		var single = random(); // execute random function 6x to get random values
		hax = hax + single; // collect the 6 values and turn into a single string
	}
	return "#"+hax; // add a "#" symnbol to make it legit hexadecimal
}

// set hexadecimal values as background color
function setRandoColors(){
	c1 = makeHex(); // execute function twice for right and left gradients
	c2 = makeHex();
	console.log(c1, c2)
	color1.value = c1; // set values for backgrounds
	color2.value = c2;
	setGradient() // call function to set background color
}


