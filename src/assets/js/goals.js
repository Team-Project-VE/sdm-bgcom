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