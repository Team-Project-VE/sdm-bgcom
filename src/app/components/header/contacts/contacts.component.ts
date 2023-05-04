import { Component, AfterViewInit } from '@angular/core';
import { LangTranslateService } from 'src/app/services/lang-translate.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
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

  ngAfterViewInit() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '../../assets/js/contacts.js';
    document.body.appendChild(script);
  }
}
