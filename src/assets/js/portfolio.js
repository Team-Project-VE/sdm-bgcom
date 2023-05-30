let slideIndex = 1;
showSlides(slideIndex);

const buttons = document.getElementsByClassName("open-modal-btn");

// Iterate over each button and attach click event handlers
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    let modalId = this.dataset.modalTarget;
    let modal = document.getElementById(modalId);
    
    // Show the modal
    modal.style.display = "block";
  });
}

const closeButtons = document.getElementsByClassName("close");

// Iterate over each close button and attach click event handlers
for (let j = 0; j < closeButtons.length; j++) {
  closeButtons[j].addEventListener("click", function() {
    let modal = this.parentElement;
    
    // Hide the modal
    modal.style.display = "none";
  });
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let thumbnails = document.getElementsByClassName("thumbnail");


  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  thumbnails[slideIndex - 1].className += " active";
}

