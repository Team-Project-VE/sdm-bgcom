import { Component, AfterViewInit } from '@angular/core';
import { LangTranslateService } from 'src/app/services/lang-translate.service';
import { Observable } from 'rxjs';
import { TranslationData } from 'src/app/services/translation-data-interface';
import { map } from 'rxjs/operators';
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
}
