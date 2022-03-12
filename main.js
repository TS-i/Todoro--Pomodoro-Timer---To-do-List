//import './style.css'

function timer(){
  var sec = '00';
  var min = 25;
  var timer = setInterval(function(){
      clock.innerHTML=min+':'+sec;
      sec--;
      if (sec < 0) {
          min--;
          sec=59;
      }
      if (min<0 & sec<0){
        clearInterval(timer);
      }
  }, 100);
}

