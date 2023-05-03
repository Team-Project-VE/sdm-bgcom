import { Component,AfterViewInit } from '@angular/core';
import { LangTranslateService } from 'src/app/services/lang-translate.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit{
  // varibale for my goals 
  getGoals:any;

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
    script.src = '../../../assets/js/goals.js';
    document.body.appendChild(script);
    //get getGoals as an array
    setTimeout(() => {
      this.langTranslate.jsonData$.pipe(
        map(data => {
          const getGoals = [];
          for (let i = 0; i < data.length; i++) {
            const goalsItem = data[i];
            if (goalsItem.ourGoals) {
              getGoals.push(goalsItem.ourGoals);
            }
          }
          return getGoals;
        })
      ).subscribe(getGoals => {
        this.getGoals = getGoals;
        console.log(this.getGoals);
      })
    });
}
}