

 let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
 slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  } 
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
var x = document.getElementById("myAudio"); 
var y = document.getElementById("slide");
var b = document.getElementById("play");
var t = document.getElementById("container");
var r = document.getElementById("msg")
y.style.display = "none";
t.style.display = "none";
r.style.display = "none";
function playAudio() { 
  x.play();
  var y = document.getElementById("slide");
  if (y.style.display === "block") {
    y.style.display = "none";
    b.style.display = "block";
   
  } else {
    y.style.display = "block";
    b.style.display = "none";
    r.style.display = "block";    
  }
}
function mssgg() { 
    var y = document.getElementById("slide");
    if (t.style.display === "block") {
      t.style.display = "none"
      r.style.display = "block";
    } else {
      t.style.display = "block";
      r.style.display = "none";
    }
  }