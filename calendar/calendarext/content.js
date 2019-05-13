console.log("calendar extension ready to go?");



chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
	console.log(message.txt);
	if (message.txt === "hello"){

		let elements = ["h1","h2","h3","h4","h5","h6","p","a","ul","ol","li","span","em","cite"];
			for (var i =0; i<elements.length; i+=1){
				let paragraphs = document.getElementsByTagName(elements[i]);
				for (elt of paragraphs){
				elt.style["background-color"] = "#ff00ff";
				// elt.innerHTML = "This is Eddie!";
				}
			}

	}
}