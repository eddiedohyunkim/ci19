console.log("background is working!");

// chrome.browserAction.onClicked.addListener(buttonClicked);

// function buttonClicked(tab){
// 	let msg = {
// 		txt: "hello"
// 	};
// 	chrome.tabs.sendMessage(tab.id, msg);
// }

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
  	let msg = {
		txt: "hello"
	};
	chrome.tabs.sendMessage(tab.id, msg);
  }
})