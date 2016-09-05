// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var rQuote;
var str = '';
function getRandomQuote(){
	return quotes[Math.floor(Math.random() * quotes.length)];
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
}