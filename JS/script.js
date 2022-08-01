var clickCount = 0;
var cpsResult;

var getClicks = document.getElementById("cps");
var getStartBtn = document.getElementById("startButton");
var getClickArea = document.getElementById("ClickArea");
var getcpsLength = document.getElementById("cpsLengthInput");

var gradient = "linear-gradient(330deg, rgba(184,174,238,1) 0%, rgba(233,148,213,1) 100%)"





////////////////////
/////Cps Game///////
////////////////////

//returns the cps Value
function totalCps(){
  cpsResult = clickCount / getcpsLength.value;
  return cpsResult.toFixed(2);
}

//adds 1 per Click
function cpsCount() {
  clickCount++;
  getClicks.innerHTML = totalCps();
}


//This function activates when the Start Button is pressed
function btnScript(){
  
  
  startCount();

  function startCount(){
    
    //if the Click Lenght is lower then 1 second the script won't work and will give a alert
    if (getcpsLength.value >= 1) {

      startTimer();//starts the timer
      enablePE();//pointer Events, makes the button clickable
      
      function startTimer() {
        setTimeout(totalCps, getcpsLength.value * 1000);
      }
      function enablePE(){
        getClickArea.style.pointerEvents = "all";
      } 


      buttonVisibility();//Makes Start the Button visable/hidden

      function buttonVisibility(){
        getStartBtn.style.visibility = "hidden";
        setTimeout(showbtn, getcpsLength.value * 1000);//showbtn ohne "()" sonst wird falsch gelesen!!!  
      }
      function showbtn(){
        getStartBtn.style.visibility = "visible";    
      }
    
      clickAreaPE();//Makes the Button unclickable when the Timer is over
    
      function clickAreaPE(){
        setTimeout(peNone, getcpsLength.value * 1000);    
      }
      function peNone(){
        getClickArea.style.pointerEvents = "none";
      }
      
      showend();//shows when ur timer is over
    
      function showend() {
        setTimeout(alert1, getcpsLength.value * 1000);
      }
      function alert1(){
        alert(`You're time is over, your cps is ${cpsResult.toFixed(2)}.`);
      }
    
      resetCount();//resets the cps count when start button is pressed
    
      function resetCount(){
        clickCount = 0;
      }
    } 
    
    else 
    
    {
      alert('You\'re should be at least 1 second! Higher you\'re value!');
    }
  }
}


////////////////////
/////Change BG//////
////////////////////

function bgWhite(){
  document.querySelector("#ClickArea").style.background = "white";
}
function bgBlack(){
  document.querySelector("#ClickArea").style.background = "black";
}
function bgBP(){
  document.querySelector("#ClickArea").style.background = gradient;
}
function bgPog(){
  document.querySelector("#ClickArea").style.backgroundImage = "url(../images/1.png)";
}

//removes the image-bg while another bg is selected
while (document.querySelector("#ClickArea").style.background == "black" || document.querySelector("#ClickArea").style.background == "white" || document.querySelector("#ClickArea").style.background == gradient)
{
  document.querySelector("#ClickArea").style.backgroundImage = "none";
}




