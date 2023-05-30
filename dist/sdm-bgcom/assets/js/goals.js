let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let sliderRight = document.getElementsByClassName("slider-right");
  let sliderLeft = document.getElementsByClassName("slider-left");
  if (n > sliderRight.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = sliderRight.length}
  for (i = 0; i < sliderRight.length; i++) {
    sliderRight[i].style.display = "none";  
    sliderLeft[i].style.display = "none";  
  }
  sliderRight[slideIndex-1].style.display = "block";  
  sliderLeft[slideIndex-1].style.display = "block";  
}

setInterval(function(){plusSlides(1)},5000);

function reveal() {
    var arrL = document.querySelectorAll(".mc-box");
    for (var i = 0; i < arrL.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = arrL[i].getBoundingClientRect().top;
      var elementVisible = 200;
  
      if (elementTop < windowHeight - elementVisible) {
        if(i%2==1){
          arrL[i].classList.add("active2");
        }else{
          arrL[i].classList.add("active1");
        }
      } else {
        if(i%2==1){
          arrL[i].classList.remove("active2");
        }else{
          arrL[i].classList.remove("active1");
        }
      }
    }
}
  
window.addEventListener("scroll", reveal);