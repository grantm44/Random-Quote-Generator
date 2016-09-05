// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var rQuote;
var str = '';
var rgbColor;
var html ='';

function getRandomQuote(){
	return quotes[Math.floor(Math.random() * quotes.length)];
}

function rgbColor(){
	return Math.floor(Math.random() * 256)	
}

function randomColor(){
	var color = 'rgb(';
	color += rgbColor() + ',';
	color += rgbColor() + ',';
	color += rgbColor() + ')';
	return color;
}

function printQuote(){
	rQuote = getRandomQuote();
	//document.write(rQuote.quote);
	str = '<p class = "quote">' + rQuote.quote + '</p>'; 
	str +='<p class="source">' + rQuote.source;
	if(rQuote.hasOwnProperty('citation')){
		str+='<span class = "citation">' + rQuote.citation +'</span>';
	}
	if(rQuote.hasOwnProperty('year')){
		str+='<span class="year">' + rQuote.year + '</span>';
	}
	str += '</p>';
	 //'<span class ="citation">' + rQuote.citation + '</span>';
	document.getElementById('quote-box').innerHTML = str;
	document.body.style.backgroundColor = randomColor();
}




