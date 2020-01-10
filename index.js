
//Detect button press
const drumButtons = document.querySelectorAll(".drum").length

for (let i = 0; i < drumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    let buttonContent = this.innerHTML
    soundPlay(buttonContent);
    buttonAnimation(buttonContent)
   
  })

}

//Detect keyboard press
document.addEventListener("keydown", function(event) {

  let key = event.key
  soundPlay(key)
  buttonAnimation(key)
})

//Play correct sound
function soundPlay(key) {
  switch (key) {
    case "w":
        let crash = new Audio('sounds/crash.mp3')
        crash.play();
      break;
    case "a":
      let kickbass = new Audio('sounds/kick-bass.mp3')
      kickbass.play();
    break;
    case "s":
      let snare = new Audio('sounds/snare.mp3')
      snare.play();
    break;
    case "d":
      let tom1 = new Audio('sounds/tom-1.mp3')
      tom1.play();
    break;
    case "j":
      let tom2 = new Audio('sounds/tom-2.mp3')
      tom2.play();
    break;
    case "k":
      let tom3 = new Audio('sounds/tom-3.mp3')
      tom3.play();
    break;
    case "l":
      let tom4 = new Audio('sounds/tom-4.mp3')
      tom4.play();
    break;

      default: console.log(buttonContent)
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector(`.${currentKey}`)
  activeButton.classList.add("pressed")

  setTimeout( function() {
    activeButton.classList.remove("pressed")
  }, 200)

}