function preventUnload() {
    let iframe = document.querySelector('iframe');
    if (!iframe) {
      iframe = document.createElement('iframe');
      document.body.appendChild(iframe).src = 'bg-iframe.html';
    }
  }
  
function allowUnload() {
    let iframe = document.querySelector('iframe');
    if (iframe) iframe.remove();
    }

chrome.runtime.onConnect.addListener(() => {});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
if (message === 'start') doSomething();
});

function doSomething() {
preventUnload();
// do something asynchronous that's spread over time
// like for example consecutive setTimeout or setInterval calls
let ticks = 20;
const interval = setInterval(tick, 1000);

function tick() {
    // do something
    // ................
    if (--ticks <= 0) done();
}

function done() {
    clearInterval(interval);
    allowUnload();
}
}

// Save Timer state on popup close
chrome.storage.sync.set({ "yourBody": "myBody" }, function(){
    //  A data saved callback omg so fancy
  });
  
  chrome.storage.sync.get(/* String or Array */["yourBody"], function(items){
    //  items = [ { "yourBody": "myBody" } ]
  });
  