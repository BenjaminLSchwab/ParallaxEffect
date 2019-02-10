
window.addEventListener("DOMContentLoaded", scrollLoop, false);

var BigYellowCircle = document.getElementById("BigYellowCircle");
var GreenPentagon = document.getElementById("GreenPentagon");
var BlueSquare = document.getElementById("BlueSquare");



var xScrollPos;
var yScrollPos;

function scrollLoop(e){
    
xScrollPos = window.scrollX;
yScrollPos = window.scrollY;

setTranslate(xScrollPos * -0.5, yScrollPos * -0.2, BigYellowCircle);
setTranslate(xScrollPos * -0.4, yScrollPos * -0.4, GreenPentagon);
setTranslate(xScrollPos * -0.3, yScrollPos * -0.6, BlueSquare);

requestAnimationFrame(scrollLoop);
}

function setTranslate(xPosition, yPosition, el){
    el.style.transform = "translate3d(" + xPosition + ", " + yPosition + "px, 0)" ;
    
}