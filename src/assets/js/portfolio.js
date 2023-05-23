  const buttons = document.getElementsByClassName("open-modal-btn");
  const modal = document.querySelector(".modal");
  const span = document.getElementsByClassName("close")[0];
  const imageFlash=document.getElementById("imageFlash");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
      modal.style.display = "block";
      var parentElement = this.parentElement;
      // Намерете снимката в родителския елемент
      var imageOptionsElement = parentElement.querySelector(".item-img .image-options");
      var imageOptions = imageOptionsElement ? imageOptionsElement.querySelectorAll("img") : [];
      // Вземете източника на изображението
    //   var imageSrc = imageElement.getAttribute("src");
      // Използвайте източника на изображението по ваше усмотрение
      console.log(imageOptions);
      imageFlash.setAttribute("src", imageSrc);

    }
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }