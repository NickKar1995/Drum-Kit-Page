
let lengthOf = document.querySelectorAll("button").length;


for (let i = 0; i<lengthOf; i++){
  document.querySelectorAll("button")[i].addEventListener('click',function(){

    let state = this.innerHTML;
    playSound(state);
    buttonAnimation(state);
})
}


document.addEventListener('keydown',function(event){
  playSound(event.key);
  buttonAnimation(event.key);
});


//Functions//
function playSound(state){

  switch (state) {
    case 'w':
    // this.style.color = "white";
    let tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
      break;
    case 'a':
    let snare = new Audio('sounds/snare.mp3');
    snare.play();
      break;
    case 's':
    let kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
      break;
    case 'd':
    let crash = new Audio('sounds/crash.mp3');
    crash.play();
      break;
    default:
    alert("welp");
  }
}


function buttonAnimation(key){
  let activeButton = document.querySelector('.' + key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  },100);


}
