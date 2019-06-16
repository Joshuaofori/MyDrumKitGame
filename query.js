
for(var i=0;i< $(".drum").length;i++)
$("button").click(function (){
	playsound($("button").text());
	buttonAnimation(this.innerHTML); 

});

document.keydown(function(event){
playsound(event.key);
buttonAnimation(event.key);
});

function playsound(input){
switch(input){
  case "w" :
  var tom1=new Audio("sounds/tom-1.mp3");
  tom1.play(); 
  break;

   case "a" :
  tom2=new Audio("sounds/tom-2.mp3");
  tom2.play();
  break;

   case "s" :
  tom3=new Audio("sounds/tom-3.mp3");
  tom3.play();
  break;

   case "d" :
  var tom4=new Audio("sounds/tom-4.mp3");
  tom4.play();
  break;

   case "j" :
  snare=new Audio("sounds/snare.mp3");
  snare.play();
  break;

   case "k" :
  crash=new Audio("sounds/crash.mp3");
  crash.play();
  break;

   case "l" :
  kick=new Audio("sounds/kick-bass.mp3");
  kick.play();
  break;

  default:
  console.log(this.innerHTML);
	}
}
function buttonAnimation(currentKey){  
document.querySelector("."+currentKey).classList.add("pressed");
setTimeout(function() {
document.querySelector("."+currentKey).classList.remove("pressed");
}, 100);
}



