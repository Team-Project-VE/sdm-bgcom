import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LangTranslateService } from 'src/app/services/lang-translate.service';
@Component({
  selector: 'app-web-dev',
  templateUrl: './web-dev.component.html',
  styleUrls: ['../web-design/web-design.component.css']
})
export class WebDevComponent {
  constructor(private route: ActivatedRoute, private langTranslate: LangTranslateService) { }
  
  // Function for get and read json fille /bg/en/tr
  get jsonData$() {
    return this.langTranslate.jsonData$;
  }

  // Function for change on langue for website
  changeLanguage(lang: string) {
    this.langTranslate.changeLanguage(lang);
  }
}
