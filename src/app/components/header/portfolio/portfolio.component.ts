import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LangTranslateService } from 'src/app/services/lang-translate.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements AfterViewInit {

  activeModalIndex: number = 0;
  slideIndex: number = 1;

  constructor(private langTranslate: LangTranslateService, private elementRef: ElementRef) { }

  // Function for get and read json file /bg/en/tr
  get jsonData$() {
    return this.langTranslate.jsonData$;
  }

  // Function for changing the language for the website
  changeLanguage(lang: string) {
    this.langTranslate.changeLanguage(lang);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const buttons = this.elementRef.nativeElement.getElementsByClassName('open-modal-btn');

      // Iterate over each button and attach click event handlers
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
          const modalId = buttons[i].dataset.modalTarget;
          const modal = document.getElementById(modalId);

          if (modal) {
            // Show the modal
            modal.style.display = 'block';

            // Update the active modal index
            this.activeModalIndex = i;
          }
        });
      }

      const closeButtons = this.elementRef.nativeElement.getElementsByClassName('close');

      // Iterate over each close button and attach click event handlers
      for (let j = 0; j < closeButtons.length; j++) {
        closeButtons[j].addEventListener('click', () => {
          const modal = closeButtons[j].parentElement;

          // Hide the modal
          modal.style.display = 'none';
        });
      }
    }, 100)
  }

  currentSlide(n: number) {
    this.showSlides(this.activeModalIndex, this.slideIndex = n);
  }

  showSlides(modalIndex: number, n: number) {
    const slides = this.elementRef.nativeElement.getElementsByClassName("mySlides");
    const thumbnails = this.elementRef.nativeElement.getElementsByClassName("thumbnail");

    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < thumbnails.length; i++) {
      thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }

    slides[this.slideIndex - 1].style.display = "block";
    thumbnails[this.slideIndex - 1].className += " active";
  }
}
