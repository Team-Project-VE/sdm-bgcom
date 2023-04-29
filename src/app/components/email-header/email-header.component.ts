import { Component, AfterViewInit } from '@angular/core';
import { LangTranslateService } from 'src/app/services/lang-translate.service';

@Component({
  selector: 'app-email-header',
  templateUrl: './email-header.component.html',
  styleUrls: ['./email-header.component.css']
})
export class EmailHeaderComponent implements AfterViewInit {

  constructor(private langTranslate: LangTranslateService) {} 

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
    script.src = '../../../assets/js/topheader.js';
    document.body.appendChild(script);
    
  };

}
