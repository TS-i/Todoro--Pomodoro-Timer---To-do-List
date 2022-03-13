//import './style.css'

var startStopButton = document.querySelector('#startStop');
var resetButton = document.querySelector("#reset");

startStopButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);


let intervalID = null;

var sec = '00';
var min = 25;
var timer = function(){
    clock.innerHTML=min+':'+sec;
    sec--;
    if (sec < 0) {
        min--;
        sec=59;
    }
    if (min<0 & sec<0){
      clearInterval(timer);
    }
};

function startTimer(){
  intervalID = setInterval(timer, 1000);
  console.log("Started");
  startStopButton.removeEventListener("click", startTimer);
  startStopButton.addEventListener("click", stopTimer);
  startStopButton.value = "Stop";
  startStopButton.innerHTML = "Stop";
}

function stopTimer(){
  clearInterval(intervalID);
  console.log("Stopped");
  startStopButton.removeEventListener("click", stopTimer);
  startStopButton.addEventListener("click", startTimer);
  startStopButton.value = "Start";
  startStopButton.innerHTML = "Start";
}

function resetTimer(){
  console.log("Timer Reset");
  sec = '00';
  min = 25;
clock.innerHTML=min+':'+sec;
}