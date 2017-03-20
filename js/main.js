$(document).ready(function(){
   $('#myDIV').hide();
   $('.carousel').carousel({
      interval: 4500
    })
});


var message = "Hello World! I'm Jorge Cano";
var msgCount = 0;
var blinkCount = 0;
var blinkFlg = 0;
var timer1, timer2;
var messageLabel = document.getElementById("messageLabel");

function textFunc() {
   messageLabel.innerHTML = message.substring(0, msgCount);

   if (msgCount == message.length) {
      // Stop Timer
      clearInterval(timer1);

      // Start blinking animation!
    //  timer2 = setInterval("blinkFunc()", 200);//

   } else {
      msgCount++;
   }
}



timer1 = setInterval("textFunc()", 150); // Every 150 milliseconds

//Javscript functionality to have the 'Projects' switch open up a list of hyper links

function myFunction() {
    var x = document.getElementById('myDIV');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
