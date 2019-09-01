alert("Press the buttons on screen or press the buttons on your keyboard");

var numberOfDrumsButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumsButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAmination(buttonInnerHTML);

  });

}

/* Detecting key press*/

document.addEventListener("keydown", function(event) {

  makeSound(event.key);
  buttonAmination(event.key);
});



/* Accion sounds playing*/

function makeSound(key) {

  switch (key) {

    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
      break;

      case "a":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

      case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

      case "d":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

      case "j":
      var kick_bass = new Audio("sounds/kick-bass.mp3");
      kick_bass.play();
      break;

      case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

      case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:

      console.log(buttonInnerHTML);

  }

}

function buttonAmination(currentKey){
  var activeKey = document.querySelector("."+currentKey);
  activeKey.classList.add("pressed");

  setTimeout(function() {
    activeKey.classList.remove("pressed");
  }, 100);
}
