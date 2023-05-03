import { Component, AfterViewInit } from '@angular/core';
import { LangTranslateService } from 'src/app/services/lang-translate.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(public translationService: LangTranslateService, private sanitizer: DomSanitizer) {}

  get jsonData$() {
    return this.translationService.jsonData$;
  }

  changeLanguage(lang: string) {
    this.translationService.changeLanguage(lang);
  }

  getSafeMapUrl(mapEmbedUrl: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(mapEmbedUrl);
  }
}
