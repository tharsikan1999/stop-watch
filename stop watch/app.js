let startButton = document.querySelector(".start");

let stopButton = document.querySelector(".stop");

let resetButton = document.querySelector(".reset");

let hours = document.querySelector("#hours");

let mins = document.querySelector("#min");

let seconds = document.querySelector("#sec");

let sec = 00,min = 00, hour =00, staringTimer;






startButton.addEventListener("click",()=>{

  startButton.classList.add('active');
  stopButton.classList.remove('active');

  staringTimer = setInterval(()=>{

    sec ++;

    if(sec< 10){
      seconds.innerText = '0' + sec;
    }
    else
    {
      seconds.innerText = sec;
     
    }

    if(sec >= 99){
      min ++;
      mins.innerText = '0' + min;
      sec = 00;

      if(min<10){
        mins.innerText = '0' + min;
  
      }else{
        mins.innerText = min;
      }
      
    }

    if(min >= 99){
      hour++;
      hours.innerText = '0' + hour;
      min = 00;

      if(hour<10){
        hours.innerText = '0' + hour;
      }
      else{
        hours.innerText = hour;
      }
    }

    

   

    

  },10)
  
});

stopButton.addEventListener("click",()=>{

  clearInterval(staringTimer);

  startButton.classList.remove('active');
  stopButton.classList.add('active');
  
});

resetButton.addEventListener("click",()=>{
  
  clearInterval(staringTimer);
  seconds.innerText = '00';

  sec = 00;
  min = 00;
  hour = 00;

  mins.innerText = '00';

  hours.innerText = '00';

  

});



