import './style.css'

//--Modal Popup--//
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("help");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closemodal");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//--Timer Navigation--//
var workBtn = document.querySelector('#workBtn');
var breakBtn = document.querySelector('#breakBtn');
const favicon = document.querySelector('#favicon');

workBtn.addEventListener('click', changeWork);
breakBtn.addEventListener('click', changeBreak);

function changeWork(){
  min = 25;
  sec = '00';
  clock.innerHTML=min+':'+sec;
  favicon.setAttribute("href","faviconPurple.svg");
  document.documentElement.style.setProperty('--main-color', '#4a0ab2');
  document.documentElement.style.setProperty('--hover-color', 'rgb(107, 15, 255, 0.8)');
  document.getElementById('workBtn').className = 'active';
  document.getElementById('breakBtn').className = '';
}

function changeBreak(){
  min = 5;
  sec = '00';
  clock.innerHTML=min+':'+sec;  
  favicon.setAttribute("href","faviconOrange.svg");
  document.documentElement.style.setProperty('--main-color', '#d64700');
  document.documentElement.style.setProperty('--hover-color', '#e8714a');
  document.getElementById('workBtn').className = '';
  document.getElementById('breakBtn').className = 'active';
}

//--Timer Code--//
// Get Timer buttons from HTML
var startStopButton = document.querySelector('#startStop');
var resetButton = document.querySelector("#reset");

// Add EventListeners to Timer buttons
startStopButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

// Get Pom counter from HTML
// var pomCounter = document.querySelector("#pomCounter");
// var pomCount = 0;

// Set up Timer Variable for later use
let intervalID = null;

// Build Timer Function
var sec = '00'.padStart(2, "0");
var min = 25;
var timer = function(){
  sec--;
  clock.innerHTML=min+':'+sec;
  if (sec < 0){
      min--;
      sec=59;
  } if (sec < 10) {
      clock.innerHTML=min+':0'+sec;
  } if (min == 0 && sec == 0){
    resetTimer();
    //pomCount++;
    //pomCounter.innerHTML="Pomodoro Counter : " + pomCount;
  }
};

// Start Timer Button
function startTimer(){
  intervalID = setInterval(timer, 1);
  console.log("Started");
  startStopButton.removeEventListener("click", startTimer);
  startStopButton.addEventListener("click", stopTimer);
  startStopButton.value = "STOP";
  startStopButton.innerHTML = "STOP";
}

// Stop Timer Button
function stopTimer(){
  clearInterval(intervalID);
  console.log("Stopped");
  startStopButton.removeEventListener("click", stopTimer);
  startStopButton.addEventListener("click", startTimer);
  startStopButton.value = "START";
  startStopButton.innerHTML = "START";
}

// Reset Timer Button
function resetTimer(){
  clearInterval(intervalID);
  sec = '00';
  min = 25;
  clock.innerHTML=min+':'+sec;
  console.log("Timer Stopped & Reset");
  startStopButton.removeEventListener("click", stopTimer);
  startStopButton.addEventListener("click", startTimer);
  startStopButton.value = "START";
  startStopButton.innerHTML = "START";
  changeWork();
}

//--To-Do List Code--//

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Get Add Button From HTML
var addButton = document.querySelector("#addBtn");
addButton.addEventListener('click', newItem);

// Create a new list item when clicking on the "Add" button
function newItem() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("todo").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
