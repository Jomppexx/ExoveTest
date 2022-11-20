//on window load initialize event listeners on buttons
window.onload = function () {
  document.getElementById("colourButton").addEventListener("click", changeColour());
  document.getElementById("sizeButton").addEventListener("click", changeSize());
  document.getElementById("speedButton").addEventListener("click", changeSpeed());
};

//function to change colour of animation
//get spinnerDot and spinnerBorder by ElementId
//if they are teal, change to purple
//if purple (or other colour), change to teal
function changeColour() {
  var spinnerBorder = document.getElementById("spinnerBorder");
  var spinnerDot = document.getElementById("spinnerDot");
  if (spinnerDot.style.backgroundColor == "teal") {
    spinnerBorder.style.borderTop = "1em solid purple";
    spinnerDot.style.backgroundColor = "purple";
  } else {
    spinnerBorder.style.borderTop = "1em solid teal";
    spinnerDot.style.backgroundColor = "teal";
  }
}

//function to change size of animation
//set fontsize to 15px if 30px or to 30px if other size
//could fix the jumping of the buttons here by tinkering with the layout :b
function changeSize() {
  var spinnerBorder = document.getElementById("spinnerBorder");
  if (spinnerBorder.style.fontSize == "30px") {
    spinnerBorder.style.fontSize = "15px";
  } else {
    spinnerBorder.style.fontSize = "30px";
  }
}

//function to change speed of animation
//if animationDuration is 3s, set it to 10s, if other duration set to 3s
//causes the animation to jump around
//This could probably be fixed by finding the frame the animation is on, saving it in a variable, then changing speed
//and setting back to the same frame before resuming the animation
function changeSpeed() {
  var spinnerBorder = document.getElementById("spinnerBorder");
  if (spinnerBorder.style.animationDuration == "3s") {
    spinnerBorder.style.animationDuration = "10s";
  } else {
    spinnerBorder.style.animationDuration = "3s";
  }
}
