console.log("chrome calendar is working!")

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
	console.log(message.txt);
	if (message.txt === "hello"){
		
		const imgs = document.getElementsByTagName("img");
		const video = document.createElement("video");
		video.setAttribute("autoplay","");
		// document.body.appendChild(video);
		
		navigator.mediaDevices.getUserMedia({video: true})
		.then((stream) => {video.srcObject = stream});
		
		document.body.onclick = function(){
			capture();
		}
		
		function capture(){
			const canvas = document.createElement("canvas");
			canvas.width = video.videoWidth;
			canvas.height = video.videoHeight;
			canvas.getContext("2d").drawImage(video, 0, 0);
			let file = canvas.toDataURL("image/jpg");
			console.log(file);
			// img
			for(let i =0; i<imgs.length; i+=1){
				imgs[i].src = file;
				imgs[i].srcset = file;
			}	

		}

	}
}