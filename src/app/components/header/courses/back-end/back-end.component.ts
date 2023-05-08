import { Component,AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { LangTranslateService } from 'src/app/services/lang-translate.service';

@Component({
  selector: 'app-back-end',
  templateUrl: './back-end.component.html',
  styleUrls: ['../c-plus-plus/c-plus-plus.component.css']
})
export class BackEndComponent implements AfterViewInit{

  constructor(private langTranslate: LangTranslateService, private cdr: ChangeDetectorRef) {} 
  
  // Function for get and read json fille /bg/en/tr
  get jsonData$() {
    return this.langTranslate.jsonData$;
  }

  // Function for change on langue for website
  changeLanguage(lang: string) {
    this.langTranslate.changeLanguage(lang);
  }

  ngAfterViewInit() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '../../../../../assets/js/course.js';
    document.body.appendChild(script);
  }

}
