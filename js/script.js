// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var rQuote;
var str = '';
var rgbColor;
var timeoutID; 
var copy = quotes.slice(0);

//return random quote from array without repeating 
function getRandomQuote(){
	if(copy.length < 1){
		copy = quotes.slice(0);
	}
	var index = Math.floor(Math.random() * copy.length);
	var hold = copy[index];
	copy.splice(index, 1);
	return hold;
}

//return random number for color
function rgbColor(){
	return Math.floor(Math.random() * 256);	
}
//create random color
function randomColor(){
	var color = 'rgb(';
	color += rgbColor() + ',';
	color += rgbColor() + ',';
	color += rgbColor() + ')';
	return color;
}

//print formated quote
//change background color
function printQuote(){
	rQuote = getRandomQuote();
	clearInterval(timeoutID);
	timeoutID = window.setInterval(printQuote, 10000);
	str = '<p class = "quote">' + rQuote.quote + '</p>'; 
	str +='<p class="source">' + rQuote.source;
	if(rQuote.hasOwnProperty('citation')){
		str+='<span class = "citation">' + rQuote.citation +'</span>';
	}
	if(rQuote.hasOwnProperty('year')){
		str+='<span class="year">' + rQuote.year + '</span>';
	}
	str += '</p>';

	document.getElementById('quote-box').innerHTML = str;
	document.body.style.backgroundColor = randomColor();
}




