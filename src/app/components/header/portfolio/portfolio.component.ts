import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LangTranslateService } from 'src/app/services/lang-translate.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements AfterViewInit {

  activeModalIndex: number = 0;
  slideIndexes: { [modal: string]: number } = {};

  @ViewChild('modalContainer') modalContainer!: ElementRef;

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
    const modalElements = this.modalContainer.nativeElement.getElementsByClassName('modal');
    const modalButtons = this.elementRef.nativeElement.getElementsByClassName('open-modal-btn');
    const thumbnails = this.elementRef.nativeElement.getElementsByClassName('thumbnail');

    for (let i = 0; i < modalButtons.length; i++) {
      modalButtons[i].addEventListener('click', () => {
        this.openModal(i);
      });
    }

    for (let i = 0; i < thumbnails.length; i++) {
      thumbnails[i].addEventListener('click', (event: Event) => {
        const target = event.target as HTMLElement;
        const modalId = target.getAttribute('data-modal-id');
        const slideIndex = parseInt(target.getAttribute('data-slide-index') || '0');
        this.currentSlide(modalId, slideIndex);
      });
    }

    for (let i = 0; i < modalElements.length; i++) {
      modalElements[i].getElementsByClassName('close')[0].addEventListener('click', () => {
        this.closeModal(i);
      });
    }
  }

  openModal(index: number) {
    const modalElements = this.modalContainer.nativeElement.getElementsByClassName('modal');
    const modalId = modalElements[index].getAttribute('id');
    this.activeModalIndex = index;
    modalElements[index].style.display = 'block';
    this.slideIndexes[modalId] = 1;
    this.showSlides(modalId, this.slideIndexes[modalId]);
  }

  closeModal(index: number) {
    const modalElements = this.modalContainer.nativeElement.getElementsByClassName('modal');
    modalElements[index].style.display = 'none';
  }
  currentSlide(modalId: string | null, slideIndex: number) {
    if (modalId !== null) {
      this.showSlides(modalId, this.slideIndexes[modalId] = slideIndex);
    }
  }

  showSlides(modalId: string, slideIndex: number) {
    const modalElements = this.modalContainer.nativeElement.getElementsByClassName('modal');
    const slides = modalElements[this.activeModalIndex].getElementsByClassName('mySlides');
    const thumbnails = modalElements[this.activeModalIndex].getElementsByClassName('thumbnail');

    if (slideIndex > slides.length) {
      this.slideIndexes[modalId] = 1;
    }

    if (slideIndex < 1) {
      this.slideIndexes[modalId] = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    for(let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].classList.remove('active');
    }slides[this.slideIndexes[modalId] - 1].style.display = 'block';
    thumbnails[this.slideIndexes[modalId] - 1].classList.add('active');
  }
    
}