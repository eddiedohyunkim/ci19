$(document).ready(function() {

	// any entry counter
	var entryCount = 1;

	// character counter
	var displayCount = 1;

	// line counter
	var enterCount = 1;

	var text = "";

  	// capture key presses
 	$(document).on("keypress", function(a) {
 		a.preventDefault();
    	entryCount ++;
    	displayCount ++;

    	// translate unicode to characters        
    	var char = String.fromCharCode(a.which);
    	createElement(char);

    		text = text + char;
    		console.log(text);
    		var regex = /\s+/g;
    		var wordCount = text.trim().replace(regex, ' ').split(' ').length;
    		$('#wordCount').html(wordCount);

    		if(wordCount == 0) {
    			$('#wordCount').html(0);
    			return;
    		}

    var str = text;
    var words = str.trim().replace(regex, ' ').split(' ');
    // words in array
   	console.log (words);    	

});


 	// function keys 
	$(document).on("keydown", function(b) {

	// delete 
    if (b.which == 8){
		b.preventDefault();
    	entryCount ++;
    	displayCount --;
    	if (displayCount < 0) {
    	  displayCount = 0;
    	}
		deleteElement();
    }
   	
   	// enter 
   	if (b.which == 13){
     	b.preventDefault();
 		enterCount ++;
 		linebreakElement(); 
	}

	// space 
    if (b.which == 32){
     	displayCount --;
	}
	

	//console.log("entry #" + entryCount + " : " + String.fromCharCode(b.which) + " |  " + displayCount + " CHAR " + " |  " + " Line " + enterCount);

    
	});

});


function createElement(c) {

var elem = $('#cursor');
	if (c == "A") { elem.before('<span class="inner">A</span>'); }
	if (c == "B") { elem.before('<span class="inner">B</span>'); }
	if (c == "C") { elem.before('<span class="inner">C</span>'); }
	if (c == "D") { elem.before('<span class="inner">D</span>'); }
	if (c == "E") { elem.before('<span class="inner">E</span>'); }
	if (c == "F") { elem.before('<span class="inner">F</span>'); }
	if (c == "G") { elem.before('<span class="inner">G</span>'); }
	if (c == "H") { elem.before('<span class="inner">H</span>'); }
	if (c == "I") { elem.before('<span class="inner">I</span>'); }
	if (c == "J") { elem.before('<span class="inner">J</span>'); }
	if (c == "K") { elem.before('<span class="inner">K</span>'); }
	if (c == "L") { elem.before('<span class="inner">L</span>'); }
	if (c == "M") { elem.before('<span class="inner">M</span>'); }
	if (c == "N") { elem.before('<span class="inner">N</span>'); }
	if (c == "O") { elem.before('<span class="inner">O</span>'); }
	if (c == "P") { elem.before('<span class="inner">P</span>'); }
	if (c == "Q") { elem.before('<span class="inner">Q</span>'); }
	if (c == "R") { elem.before('<span class="inner">R</span>'); }
	if (c == "S") { elem.before('<span class="inner">S</span>'); }
	if (c == "T") { elem.before('<span class="inner">T</span>'); }
	if (c == "U") { elem.before('<span class="inner">U</span>'); }
	if (c == "V") { elem.before('<span class="inner">V</span>'); }
	if (c == "W") { elem.before('<span class="inner">W</span>'); }
	if (c == "X") { elem.before('<span class="inner">X</span>'); }
	if (c == "Y") { elem.before('<span class="inner">Y</span>'); }
	if (c == "Z") { elem.before('<span class="inner">Z</span>'); }

	if (c == "a") { elem.before('<span class="inner">a</span>'); }
	if (c == "b") { elem.before('<span class="inner">b</span>'); }
	if (c == "c") { elem.before('<span class="inner">c</span>'); }
	if (c == "d") { elem.before('<span class="inner">d</span>'); }
	if (c == "e") { elem.before('<span class="inner">e</span>'); }
	if (c == "f") { elem.before('<span class="inner">f</span>'); }
	if (c == "g") { elem.before('<span class="inner">g</span>'); }
	if (c == "h") { elem.before('<span class="inner">h</span>'); }
	if (c == "i") { elem.before('<span class="inner">i</span>'); }
	if (c == "j") { elem.before('<span class="inner">j</span>'); }
	if (c == "k") { elem.before('<span class="inner">k</span>'); }
	if (c == "l") { elem.before('<span class="inner">l</span>'); }
	if (c == "m") { elem.before('<span class="inner">m</span>'); }
	if (c == "n") { elem.before('<span class="inner">n</span>'); }
	if (c == "o") { elem.before('<span class="inner">o</span>'); }
	if (c == "p") { elem.before('<span class="inner">p</span>'); }
	if (c == "q") { elem.before('<span class="inner">q</span>'); }
	if (c == "r") { elem.before('<span class="inner">r</span>'); }
	if (c == "s") { elem.before('<span class="inner">s</span>'); }
	if (c == "t") { elem.before('<span class="inner">t</span>'); }
	if (c == "u") { elem.before('<span class="inner">u</span>'); }
	if (c == "v") { elem.before('<span class="inner">v</span>'); }
	if (c == "w") { elem.before('<span class="inner">w</span>'); }
	if (c == "x") { elem.before('<span class="inner">x</span>'); }
	if (c == "y") { elem.before('<span class="inner">y</span>'); }
	if (c == "z") { elem.before('<span class="inner">z</span>'); }

	if (c == "1") { elem.before('<span class="inner">1</span>'); }
	if (c == "2") { elem.before('<span class="inner">2</span>'); }
	if (c == "3") { elem.before('<span class="inner">3</span>'); }
	if (c == "4") { elem.before('<span class="inner">4</span>'); }
	if (c == "5") { elem.before('<span class="inner">5</span>'); }
	if (c == "6") { elem.before('<span class="inner">6</span>'); }
	if (c == "7") { elem.before('<span class="inner">7</span>'); }
	if (c == "8") { elem.before('<span class="inner">8</span>'); }
	if (c == "9") { elem.before('<span class="inner">9</span>'); }
	if (c == "0") { elem.before('<span class="inner">0</span>'); }

	if (c == "[") { elem.before('<span class="inner">[</span>'); }
	if (c == "{") { elem.before('<span class="inner">{</span>'); }
	if (c == "`") { elem.before('<span class="inner">`</span>'); }
	if (c == "~") { elem.before('<span class="inner">~</span>'); }
	if (c == "!") { elem.before('<span class="inner">!</span>'); }
	if (c == "@") { elem.before('<span class="inner">@</span>'); }
	if (c == "#") { elem.before('<span class="inner">#</span>'); }
	if (c == "$") { elem.before('<span class="inner">$</span>'); }
	if (c == "%") { elem.before('<span class="inner">%</span>'); }
	if (c == "^") { elem.before('<span class="inner">^</span>'); }
	if (c == "&") { elem.before('<span class="inner">&</span>'); }
	if (c == "*") { elem.before('<span class="inner">*</span>'); }
	if (c == "(") { elem.before('<span class="inner">(</span>'); }
	if (c == ")") { elem.before('<span class="inner">)</span>'); }
	if (c == "-") { elem.before('<span class="inner">-</span>'); }
	if (c == "=") { elem.before('<span class="inner">=</span>'); }
	if (c == "_") { elem.before('<span class="inner">_</span>'); }
	if (c == "+") { elem.before('<span class="inner">+</span>'); }
	if (c == "[") { elem.before('<span class="inner">[</span>'); }
	if (c == "{") { elem.before('<span class="inner">{</span>'); }
	if (c == "]") { elem.before('<span class="inner">]</span>'); }
	if (c == "}") { elem.before('<span class="inner">}</span>'); }
	if (c == ";") { elem.before('<span class="inner">;</span>'); }
	if (c == ":") { elem.before('<span class="inner">:</span>'); }
	if (c == "{") { elem.before('<span class="inner">{</span>'); }
	if (c == "<") { elem.before('<span class="inner"><</span>'); }
	if (c == ">") { elem.before('<span class="inner">></span>'); }
	if (c == "{") { elem.before('<span class="inner">{</span>'); }
	if (c == ",") { elem.before('<span class="inner">,</span>'); }
	if (c == ".") { elem.before('<span class="inner">.</span>'); }
	if (c == "/") { elem.before('<span class="inner">/</span>'); }
	if (c == "?") { elem.before('<span class="inner">?</span>'); }
	if (c == '"') { elem.before('<span class="inner">"</span>'); }
	if (c == "'") { elem.before("<span class='inner'>'</span>"); }
	if (c == " ") { elem.before('<span class="inner">&nbsp;</span>'); }

};


function deleteElement() {
	$(".inner").last().remove();
}

function linebreakElement() {
	var elem = $('#cursor');
	$(".inner").after().last().append('</br>');
}

