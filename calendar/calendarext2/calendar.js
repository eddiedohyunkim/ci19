console.log("chrome calendar works!");

let imgs = document.getElementsByTagName("img");
for(imgElt of imgs) {
	let file = "cat.jpg"
	let url = chrome.extension.getURL(file);
	imgElt.src = url;
	console.log(url);
}